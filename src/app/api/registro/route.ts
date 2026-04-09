import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'registros.json');

interface Registro {
  id: string;
  email: string;
  nombre: string;
  creador: string;
  fecha: string;
  ip: string;
}

async function ensureDataFile() {
  const dir = path.dirname(DATA_FILE);
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, '[]', 'utf-8');
  }
}

async function getRegistros(): Promise<Registro[]> {
  await ensureDataFile();
  const data = await fs.readFile(DATA_FILE, 'utf-8');
  return JSON.parse(data);
}

async function saveRegistros(registros: Registro[]) {
  await ensureDataFile();
  await fs.writeFile(DATA_FILE, JSON.stringify(registros, null, 2), 'utf-8');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, nombre, creador } = body;

    // Validation
    if (!email || !nombre) {
      return NextResponse.json(
        { error: 'Email y nombre son obligatorios' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email no válido' },
        { status: 400 }
      );
    }

    if (nombre.length < 3 || nombre.length > 30) {
      return NextResponse.json(
        { error: 'El nombre debe tener entre 3 y 30 caracteres' },
        { status: 400 }
      );
    }

    // Check duplicates
    const registros = await getRegistros();
    const emailExists = registros.some(r => r.email.toLowerCase() === email.toLowerCase());
    if (emailExists) {
      return NextResponse.json(
        { error: 'Este email ya está registrado' },
        { status: 409 }
      );
    }

    const nombreExists = registros.some(r => r.nombre.toLowerCase() === nombre.toLowerCase());
    if (nombreExists) {
      return NextResponse.json(
        { error: 'Este nombre de usuario ya está en uso' },
        { status: 409 }
      );
    }

    // Create registration
    const registro: Registro = {
      id: `zm_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      email: email.toLowerCase().trim(),
      nombre: nombre.trim(),
      creador: creador || '',
      fecha: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
    };

    registros.push(registro);
    await saveRegistros(registros);

    return NextResponse.json(
      {
        success: true,
        message: 'Registro completado',
        id: registro.id,
        total: registros.length,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error en registro:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// GET: count registrations (public stat)
export async function GET() {
  try {
    const registros = await getRegistros();
    return NextResponse.json({ total: registros.length });
  } catch {
    return NextResponse.json({ total: 0 });
  }
}
