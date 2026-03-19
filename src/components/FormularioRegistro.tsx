// src/components/FormularioRegistro.tsx
// Formulario de registro para ZonaMundial
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getCreadoresActivos } from '@/data/creadores';

export default function FormularioRegistro() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    nombre: '',
    creador: '',
    acceptTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const creadores = getCreadoresActivos();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-xl font-bold text-white mb-2">¡Registro exitoso!</h3>
        <p className="text-gray-400 text-sm mb-6">
          Te hemos enviado un email de confirmación. Revisa tu bandeja de entrada.
        </p>
        <Link 
          href="/"
          className="inline-block px-6 py-3 rounded-xl text-[#030712] font-bold text-sm"
          style={{ background: 'linear-gradient(135deg, #C9A84C, #A8893D)' }}
        >
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {step === 1 && (
        <>
          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#0B1825] border border-[#1E293B] text-white text-sm focus:border-[#C9A84C] focus:outline-none transition-colors"
              placeholder="tu@email.com"
            />
          </div>

          {/* Nombre */}
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-2">
              Nombre de usuario
            </label>
            <input
              type="text"
              required
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#0B1825] border border-[#1E293B] text-white text-sm focus:border-[#C9A84C] focus:outline-none transition-colors"
              placeholder="Tu nombre"
            />
          </div>

          {/* Términos */}
          <div className="flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              id="terms"
              required
              checked={formData.acceptTerms}
              onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
              className="mt-0.5 w-4 h-4 rounded border-[#1E293B] bg-[#0B1825] text-[#C9A84C] focus:ring-[#C9A84C]"
            />
            <label htmlFor="terms" className="text-xs text-gray-500">
              Acepto los <Link href="/terminos" className="text-[#C9A84C] hover:underline">términos de uso</Link> y la{' '}
              <Link href="/privacidad" className="text-[#C9A84C] hover:underline">política de privacidad</Link>
            </label>
          </div>

          <button
            type="button"
            onClick={() => setStep(2)}
            disabled={!formData.email || !formData.nombre || !formData.acceptTerms}
            className="w-full py-3.5 rounded-xl text-[#030712] font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            style={{ background: 'linear-gradient(135deg, #C9A84C, #A8893D)' }}
          >
            Continuar
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <button
            type="button"
            onClick={() => setStep(1)}
            className="text-xs text-gray-500 hover:text-[#C9A84C] flex items-center gap-1 mb-2"
          >
            ← Volver
          </button>

          <p className="text-sm text-gray-300 mb-4">
            Elige el creador cuya comunidad quieres unirte:
          </p>

          <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
            {creadores.map((c) => (
              <label
                key={c.slug}
                className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                  formData.creador === c.slug
                    ? 'border-[#C9A84C] bg-[#C9A84C08]'
                    : 'border-[#1E293B] hover:border-[#2a3a4f]'
                }`}
              >
                <input
                  type="radio"
                  name="creador"
                  value={c.slug}
                  checked={formData.creador === c.slug}
                  onChange={(e) => setFormData({ ...formData, creador: e.target.value })}
                  className="sr-only"
                />
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                  style={{ background: `${c.colorPrimario}15`, border: `2px solid ${c.colorPrimario}33` }}
                >
                  {c.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-white truncate">{c.nombre}</div>
                  <div className="text-xs text-gray-500">{c.seguidores} seguidores</div>
                </div>
                {formData.creador === c.slug && (
                  <div className="w-5 h-5 rounded-full bg-[#C9A84C] flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#030712]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </label>
            ))}
          </div>

          <button
            type="submit"
            disabled={!formData.creador || loading}
            className="w-full py-3.5 rounded-xl text-[#030712] font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all mt-4"
            style={{ background: 'linear-gradient(135deg, #C9A84C, #A8893D)' }}
          >
            {loading ? 'Registrando...' : 'Completar registro'}
          </button>
        </>
      )}

      {/* Login link */}
      <div className="text-center pt-2">
        <span className="text-xs text-gray-500">
          ¿Ya tienes cuenta?{' '}
          <Link href="/login" className="text-[#C9A84C] hover:underline font-medium">
            Iniciar sesión
          </Link>
        </span>
      </div>
    </form>
  );
}
