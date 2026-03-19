"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";

const BG="#060B14",BG2="#0F1D32",BG3="#0B1825",GOLD="#c9a84c",GOLD2="#e8d48b",MID="#8a94b0",DIM="#6a7a9a",DARK="#4a5570";

const M=[{"i": 1, "g": "A", "p": "Fase de grupos", "j": 1, "h": "México", "hf": "mx", "a": "Sudáfrica", "af": "za", "d": "2026-06-11", "t": "12:00", "vn": "MetLife Stadium", "vc": "Nueva York/NJ", "vf": "us"}, {"i": 2, "g": "A", "p": "Fase de grupos", "j": 1, "h": "Corea del Sur", "hf": "kr", "a": "Por definir", "af": "tbd", "d": "2026-06-11", "t": "18:00", "vn": "Estadio Azteca", "vc": "Ciudad de México", "vf": "mx"}, {"i": 3, "g": "B", "p": "Fase de grupos", "j": 1, "h": "Canadá", "hf": "ca", "a": "Qatar", "af": "qa", "d": "2026-06-12", "t": "12:00", "vn": "SoFi Stadium", "vc": "Los Ángeles", "vf": "us"}, {"i": 4, "g": "B", "p": "Fase de grupos", "j": 1, "h": "Por definir", "hf": "tbd", "a": "Suiza", "af": "ch", "d": "2026-06-12", "t": "15:00", "vn": "Hard Rock Stadium", "vc": "Miami", "vf": "us"}, {"i": 5, "g": "C", "p": "Fase de grupos", "j": 1, "h": "Brasil", "hf": "br", "a": "Haití", "af": "ht", "d": "2026-06-12", "t": "18:00", "vn": "NRG Stadium", "vc": "Houston", "vf": "us"}, {"i": 6, "g": "C", "p": "Fase de grupos", "j": 1, "h": "Marruecos", "hf": "ma", "a": "Escocia", "af": "gb-sct", "d": "2026-06-12", "t": "21:00", "vn": "Mercedes-Benz Stadium", "vc": "Atlanta", "vf": "us"}, {"i": 7, "g": "D", "p": "Fase de grupos", "j": 1, "h": "EE.UU.", "hf": "us", "a": "Australia", "af": "au", "d": "2026-06-13", "t": "12:00", "vn": "Lincoln Financial Field", "vc": "Filadelfia", "vf": "us"}, {"i": 8, "g": "D", "p": "Fase de grupos", "j": 1, "h": "Paraguay", "hf": "py", "a": "Por definir", "af": "tbd", "d": "2026-06-13", "t": "15:00", "vn": "Lumen Field", "vc": "Seattle", "vf": "us"}, {"i": 9, "g": "E", "p": "Fase de grupos", "j": 1, "h": "Alemania", "hf": "de", "a": "C. de Marfil", "af": "ci", "d": "2026-06-13", "t": "18:00", "vn": "Arrowhead Stadium", "vc": "Kansas City", "vf": "us"}, {"i": 10, "g": "E", "p": "Fase de grupos", "j": 1, "h": "Curazao", "hf": "cw", "a": "Ecuador", "af": "ec", "d": "2026-06-13", "t": "21:00", "vn": "Gillette Stadium", "vc": "Boston", "vf": "us"}, {"i": 11, "g": "F", "p": "Fase de grupos", "j": 1, "h": "P. Bajos", "hf": "nl", "a": "Por definir", "af": "tbd", "d": "2026-06-14", "t": "12:00", "vn": "Levi's Stadium", "vc": "San Francisco", "vf": "us"}, {"i": 12, "g": "F", "p": "Fase de grupos", "j": 1, "h": "Japón", "hf": "jp", "a": "Túnez", "af": "tn", "d": "2026-06-14", "t": "15:00", "vn": "AT&T Stadium", "vc": "Dallas", "vf": "us"}, {"i": 13, "g": "G", "p": "Fase de grupos", "j": 1, "h": "Bélgica", "hf": "be", "a": "Irán", "af": "ir", "d": "2026-06-14", "t": "12:00", "vn": "Estadio Akron", "vc": "Guadalajara", "vf": "mx"}, {"i": 14, "g": "G", "p": "Fase de grupos", "j": 1, "h": "Egipto", "hf": "eg", "a": "N. Zelanda", "af": "nz", "d": "2026-06-14", "t": "15:00", "vn": "Estadio BBVA", "vc": "Monterrey", "vf": "mx"}, {"i": 15, "g": "H", "p": "Fase de grupos", "j": 1, "h": "España", "hf": "es", "a": "A. Saudí", "af": "sa", "d": "2026-06-14", "t": "18:00", "vn": "BMO Field", "vc": "Toronto", "vf": "ca"}, {"i": 16, "g": "H", "p": "Fase de grupos", "j": 1, "h": "Cabo Verde", "hf": "cv", "a": "Uruguay", "af": "uy", "d": "2026-06-14", "t": "18:00", "vn": "BC Place", "vc": "Vancouver", "vf": "ca"}, {"i": 17, "g": "I", "p": "Fase de grupos", "j": 1, "h": "Francia", "hf": "fr", "a": "Por definir", "af": "tbd", "d": "2026-06-14", "t": "21:00", "vn": "MetLife Stadium", "vc": "Nueva York/NJ", "vf": "us"}, {"i": 18, "g": "I", "p": "Fase de grupos", "j": 1, "h": "Senegal", "hf": "sn", "a": "Noruega", "af": "no", "d": "2026-06-14", "t": "21:00", "vn": "Estadio Azteca", "vc": "Ciudad de México", "vf": "mx"}, {"i": 19, "g": "J", "p": "Fase de grupos", "j": 1, "h": "Argentina", "hf": "ar", "a": "Austria", "af": "at", "d": "2026-06-15", "t": "12:00", "vn": "SoFi Stadium", "vc": "Los Ángeles", "vf": "us"}, {"i": 20, "g": "J", "p": "Fase de grupos", "j": 1, "h": "Argelia", "hf": "dz", "a": "Jordania", "af": "jo", "d": "2026-06-15", "t": "15:00", "vn": "Hard Rock Stadium", "vc": "Miami", "vf": "us"}, {"i": 21, "g": "K", "p": "Fase de grupos", "j": 1, "h": "Portugal", "hf": "pt", "a": "Uzbekistán", "af": "uz", "d": "2026-06-15", "t": "18:00", "vn": "NRG Stadium", "vc": "Houston", "vf": "us"}, {"i": 22, "g": "K", "p": "Fase de grupos", "j": 1, "h": "Por definir", "hf": "tbd", "a": "Colombia", "af": "co", "d": "2026-06-15", "t": "18:00", "vn": "Mercedes-Benz Stadium", "vc": "Atlanta", "vf": "us"}, {"i": 23, "g": "L", "p": "Fase de grupos", "j": 1, "h": "Inglaterra", "hf": "gb-eng", "a": "Ghana", "af": "gh", "d": "2026-06-15", "t": "21:00", "vn": "Lincoln Financial Field", "vc": "Filadelfia", "vf": "us"}, {"i": 24, "g": "L", "p": "Fase de grupos", "j": 1, "h": "Croacia", "hf": "hr", "a": "Panamá", "af": "pa", "d": "2026-06-15", "t": "21:00", "vn": "Lumen Field", "vc": "Seattle", "vf": "us"}, {"i": 25, "g": "A", "p": "Fase de grupos", "j": 2, "h": "México", "hf": "mx", "a": "Por definir", "af": "tbd", "d": "2026-06-17", "t": "12:00", "vn": "Arrowhead Stadium", "vc": "Kansas City", "vf": "us"}, {"i": 26, "g": "A", "p": "Fase de grupos", "j": 2, "h": "Corea del Sur", "hf": "kr", "a": "Sudáfrica", "af": "za", "d": "2026-06-17", "t": "15:00", "vn": "Gillette Stadium", "vc": "Boston", "vf": "us"}, {"i": 27, "g": "B", "p": "Fase de grupos", "j": 2, "h": "Canadá", "hf": "ca", "a": "Suiza", "af": "ch", "d": "2026-06-17", "t": "15:00", "vn": "Levi's Stadium", "vc": "San Francisco", "vf": "us"}, {"i": 28, "g": "B", "p": "Fase de grupos", "j": 2, "h": "Por definir", "hf": "tbd", "a": "Qatar", "af": "qa", "d": "2026-06-17", "t": "18:00", "vn": "AT&T Stadium", "vc": "Dallas", "vf": "us"}, {"i": 29, "g": "C", "p": "Fase de grupos", "j": 2, "h": "Brasil", "hf": "br", "a": "Escocia", "af": "gb-sct", "d": "2026-06-17", "t": "18:00", "vn": "Estadio Akron", "vc": "Guadalajara", "vf": "mx"}, {"i": 30, "g": "C", "p": "Fase de grupos", "j": 2, "h": "Marruecos", "hf": "ma", "a": "Haití", "af": "ht", "d": "2026-06-17", "t": "21:00", "vn": "Estadio BBVA", "vc": "Monterrey", "vf": "mx"}, {"i": 31, "g": "D", "p": "Fase de grupos", "j": 2, "h": "EE.UU.", "hf": "us", "a": "Por definir", "af": "tbd", "d": "2026-06-18", "t": "21:00", "vn": "BMO Field", "vc": "Toronto", "vf": "ca"}, {"i": 32, "g": "D", "p": "Fase de grupos", "j": 2, "h": "Paraguay", "hf": "py", "a": "Australia", "af": "au", "d": "2026-06-18", "t": "12:00", "vn": "BC Place", "vc": "Vancouver", "vf": "ca"}, {"i": 33, "g": "E", "p": "Fase de grupos", "j": 2, "h": "Alemania", "hf": "de", "a": "Ecuador", "af": "ec", "d": "2026-06-18", "t": "12:00", "vn": "MetLife Stadium", "vc": "Nueva York/NJ", "vf": "us"}, {"i": 34, "g": "E", "p": "Fase de grupos", "j": 2, "h": "Curazao", "hf": "cw", "a": "C. de Marfil", "af": "ci", "d": "2026-06-18", "t": "15:00", "vn": "Estadio Azteca", "vc": "Ciudad de México", "vf": "mx"}, {"i": 35, "g": "F", "p": "Fase de grupos", "j": 2, "h": "P. Bajos", "hf": "nl", "a": "Túnez", "af": "tn", "d": "2026-06-18", "t": "15:00", "vn": "SoFi Stadium", "vc": "Los Ángeles", "vf": "us"}, {"i": 36, "g": "F", "p": "Fase de grupos", "j": 2, "h": "Japón", "hf": "jp", "a": "Por definir", "af": "tbd", "d": "2026-06-18", "t": "18:00", "vn": "Hard Rock Stadium", "vc": "Miami", "vf": "us"}, {"i": 37, "g": "G", "p": "Fase de grupos", "j": 2, "h": "Bélgica", "hf": "be", "a": "N. Zelanda", "af": "nz", "d": "2026-06-19", "t": "18:00", "vn": "NRG Stadium", "vc": "Houston", "vf": "us"}, {"i": 38, "g": "G", "p": "Fase de grupos", "j": 2, "h": "Egipto", "hf": "eg", "a": "Irán", "af": "ir", "d": "2026-06-19", "t": "21:00", "vn": "Mercedes-Benz Stadium", "vc": "Atlanta", "vf": "us"}, {"i": 39, "g": "H", "p": "Fase de grupos", "j": 2, "h": "España", "hf": "es", "a": "Uruguay", "af": "uy", "d": "2026-06-19", "t": "21:00", "vn": "Lincoln Financial Field", "vc": "Filadelfia", "vf": "us"}, {"i": 40, "g": "H", "p": "Fase de grupos", "j": 2, "h": "Cabo Verde", "hf": "cv", "a": "A. Saudí", "af": "sa", "d": "2026-06-19", "t": "12:00", "vn": "Lumen Field", "vc": "Seattle", "vf": "us"}, {"i": 41, "g": "I", "p": "Fase de grupos", "j": 2, "h": "Francia", "hf": "fr", "a": "Noruega", "af": "no", "d": "2026-06-19", "t": "12:00", "vn": "Arrowhead Stadium", "vc": "Kansas City", "vf": "us"}, {"i": 42, "g": "I", "p": "Fase de grupos", "j": 2, "h": "Senegal", "hf": "sn", "a": "Por definir", "af": "tbd", "d": "2026-06-19", "t": "15:00", "vn": "Gillette Stadium", "vc": "Boston", "vf": "us"}, {"i": 43, "g": "J", "p": "Fase de grupos", "j": 2, "h": "Argentina", "hf": "ar", "a": "Jordania", "af": "jo", "d": "2026-06-20", "t": "15:00", "vn": "Levi's Stadium", "vc": "San Francisco", "vf": "us"}, {"i": 44, "g": "J", "p": "Fase de grupos", "j": 2, "h": "Argelia", "hf": "dz", "a": "Austria", "af": "at", "d": "2026-06-20", "t": "18:00", "vn": "AT&T Stadium", "vc": "Dallas", "vf": "us"}, {"i": 45, "g": "K", "p": "Fase de grupos", "j": 2, "h": "Portugal", "hf": "pt", "a": "Colombia", "af": "co", "d": "2026-06-20", "t": "18:00", "vn": "Estadio Akron", "vc": "Guadalajara", "vf": "mx"}, {"i": 46, "g": "K", "p": "Fase de grupos", "j": 2, "h": "Por definir", "hf": "tbd", "a": "Uzbekistán", "af": "uz", "d": "2026-06-20", "t": "21:00", "vn": "Estadio BBVA", "vc": "Monterrey", "vf": "mx"}, {"i": 47, "g": "L", "p": "Fase de grupos", "j": 2, "h": "Inglaterra", "hf": "gb-eng", "a": "Panamá", "af": "pa", "d": "2026-06-20", "t": "21:00", "vn": "BMO Field", "vc": "Toronto", "vf": "ca"}, {"i": 48, "g": "L", "p": "Fase de grupos", "j": 2, "h": "Croacia", "hf": "hr", "a": "Ghana", "af": "gh", "d": "2026-06-20", "t": "12:00", "vn": "BC Place", "vc": "Vancouver", "vf": "ca"}, {"i": 49, "g": "A", "p": "Fase de grupos", "j": 3, "h": "México", "hf": "mx", "a": "Corea del Sur", "af": "kr", "d": "2026-06-23", "t": "18:00", "vn": "MetLife Stadium", "vc": "Nueva York/NJ", "vf": "us"}, {"i": 50, "g": "A", "p": "Fase de grupos", "j": 3, "h": "Sudáfrica", "hf": "za", "a": "Por definir", "af": "tbd", "d": "2026-06-23", "t": "18:00", "vn": "Estadio Azteca", "vc": "Ciudad de México", "vf": "mx"}, {"i": 51, "g": "B", "p": "Fase de grupos", "j": 3, "h": "Canadá", "hf": "ca", "a": "Por definir", "af": "tbd", "d": "2026-06-23", "t": "18:00", "vn": "SoFi Stadium", "vc": "Los Ángeles", "vf": "us"}, {"i": 52, "g": "B", "p": "Fase de grupos", "j": 3, "h": "Qatar", "hf": "qa", "a": "Suiza", "af": "ch", "d": "2026-06-23", "t": "18:00", "vn": "Hard Rock Stadium", "vc": "Miami", "vf": "us"}, {"i": 53, "g": "C", "p": "Fase de grupos", "j": 3, "h": "Brasil", "hf": "br", "a": "Marruecos", "af": "ma", "d": "2026-06-23", "t": "21:00", "vn": "NRG Stadium", "vc": "Houston", "vf": "us"}, {"i": 54, "g": "C", "p": "Fase de grupos", "j": 3, "h": "Haití", "hf": "ht", "a": "Escocia", "af": "gb-sct", "d": "2026-06-23", "t": "21:00", "vn": "Mercedes-Benz Stadium", "vc": "Atlanta", "vf": "us"}, {"i": 55, "g": "D", "p": "Fase de grupos", "j": 3, "h": "EE.UU.", "hf": "us", "a": "Paraguay", "af": "py", "d": "2026-06-24", "t": "21:00", "vn": "Lincoln Financial Field", "vc": "Filadelfia", "vf": "us"}, {"i": 56, "g": "D", "p": "Fase de grupos", "j": 3, "h": "Australia", "hf": "au", "a": "Por definir", "af": "tbd", "d": "2026-06-24", "t": "21:00", "vn": "Lumen Field", "vc": "Seattle", "vf": "us"}, {"i": 57, "g": "E", "p": "Fase de grupos", "j": 3, "h": "Alemania", "hf": "de", "a": "Curazao", "af": "cw", "d": "2026-06-24", "t": "18:00", "vn": "Arrowhead Stadium", "vc": "Kansas City", "vf": "us"}, {"i": 58, "g": "E", "p": "Fase de grupos", "j": 3, "h": "C. de Marfil", "hf": "ci", "a": "Ecuador", "af": "ec", "d": "2026-06-24", "t": "18:00", "vn": "Gillette Stadium", "vc": "Boston", "vf": "us"}, {"i": 59, "g": "F", "p": "Fase de grupos", "j": 3, "h": "P. Bajos", "hf": "nl", "a": "Japón", "af": "jp", "d": "2026-06-24", "t": "18:00", "vn": "Levi's Stadium", "vc": "San Francisco", "vf": "us"}, {"i": 60, "g": "F", "p": "Fase de grupos", "j": 3, "h": "Por definir", "hf": "tbd", "a": "Túnez", "af": "tn", "d": "2026-06-24", "t": "18:00", "vn": "AT&T Stadium", "vc": "Dallas", "vf": "us"}, {"i": 61, "g": "G", "p": "Fase de grupos", "j": 3, "h": "Bélgica", "hf": "be", "a": "Egipto", "af": "eg", "d": "2026-06-25", "t": "21:00", "vn": "Estadio Akron", "vc": "Guadalajara", "vf": "mx"}, {"i": 62, "g": "G", "p": "Fase de grupos", "j": 3, "h": "Irán", "hf": "ir", "a": "N. Zelanda", "af": "nz", "d": "2026-06-25", "t": "21:00", "vn": "Estadio BBVA", "vc": "Monterrey", "vf": "mx"}, {"i": 63, "g": "H", "p": "Fase de grupos", "j": 3, "h": "España", "hf": "es", "a": "Cabo Verde", "af": "cv", "d": "2026-06-25", "t": "21:00", "vn": "BMO Field", "vc": "Toronto", "vf": "ca"}, {"i": 64, "g": "H", "p": "Fase de grupos", "j": 3, "h": "A. Saudí", "hf": "sa", "a": "Uruguay", "af": "uy", "d": "2026-06-25", "t": "21:00", "vn": "BC Place", "vc": "Vancouver", "vf": "ca"}, {"i": 65, "g": "I", "p": "Fase de grupos", "j": 3, "h": "Francia", "hf": "fr", "a": "Senegal", "af": "sn", "d": "2026-06-25", "t": "18:00", "vn": "MetLife Stadium", "vc": "Nueva York/NJ", "vf": "us"}, {"i": 66, "g": "I", "p": "Fase de grupos", "j": 3, "h": "Por definir", "hf": "tbd", "a": "Noruega", "af": "no", "d": "2026-06-25", "t": "18:00", "vn": "Estadio Azteca", "vc": "Ciudad de México", "vf": "mx"}, {"i": 67, "g": "J", "p": "Fase de grupos", "j": 3, "h": "Argentina", "hf": "ar", "a": "Argelia", "af": "dz", "d": "2026-06-26", "t": "18:00", "vn": "SoFi Stadium", "vc": "Los Ángeles", "vf": "us"}, {"i": 68, "g": "J", "p": "Fase de grupos", "j": 3, "h": "Austria", "hf": "at", "a": "Jordania", "af": "jo", "d": "2026-06-26", "t": "18:00", "vn": "Hard Rock Stadium", "vc": "Miami", "vf": "us"}, {"i": 69, "g": "K", "p": "Fase de grupos", "j": 3, "h": "Portugal", "hf": "pt", "a": "Por definir", "af": "tbd", "d": "2026-06-26", "t": "21:00", "vn": "NRG Stadium", "vc": "Houston", "vf": "us"}, {"i": 70, "g": "K", "p": "Fase de grupos", "j": 3, "h": "Uzbekistán", "hf": "uz", "a": "Colombia", "af": "co", "d": "2026-06-26", "t": "21:00", "vn": "Mercedes-Benz Stadium", "vc": "Atlanta", "vf": "us"}, {"i": 71, "g": "L", "p": "Fase de grupos", "j": 3, "h": "Inglaterra", "hf": "gb-eng", "a": "Croacia", "af": "hr", "d": "2026-06-26", "t": "21:00", "vn": "Lincoln Financial Field", "vc": "Filadelfia", "vf": "us"}, {"i": 72, "g": "L", "p": "Fase de grupos", "j": 3, "h": "Ghana", "hf": "gh", "a": "Panamá", "af": "pa", "d": "2026-06-26", "t": "21:00", "vn": "Lumen Field", "vc": "Seattle", "vf": "us"}, {"i": 73, "g": null, "p": "Dieciseisavos", "j": null, "h": "1º Grupo A", "hf": null, "a": "2º Grupo G", "af": null, "d": "2026-06-28", "t": "15:00", "vn": "MetLife Stadium", "vc": "Nueva York/NJ", "vf": "us"}, {"i": 74, "g": null, "p": "Dieciseisavos", "j": null, "h": "1º Grupo B", "hf": null, "a": "2º Grupo H", "af": null, "d": "2026-06-28", "t": "18:00", "vn": "Estadio Azteca", "vc": "Ciudad de México", "vf": "mx"}, {"i": 75, "g": null, "p": "Dieciseisavos", "j": null, "h": "1º Grupo C", "hf": null, "a": "2º Grupo I", "af": null, "d": "2026-06-28", "t": "21:00", "vn": "SoFi Stadium", "vc": "Los Ángeles", "vf": "us"}, {"i": 76, "g": null, "p": "Dieciseisavos", "j": null, "h": "1º Grupo D", "hf": null, "a": "2º Grupo J", "af": null, "d": "2026-06-28", "t": "12:00", "vn": "Hard Rock Stadium", "vc": "Miami", "vf": "us"}, {"i": 77, "g": null, "p": "Dieciseisavos", "j": null, "h": "1º Grupo E", "hf": null, "a": "2º Grupo K", "af": null, "d": "2026-06-29", "t": "15:00", "vn": "NRG Stadium", "vc": "Houston", "vf": "us"}, {"i": 78, "g": null, "p": "Dieciseisavos", "j": null, "h": "1º Grupo F", "hf": null, "a": "2º Grupo L", "af": null, "d": "2026-06-29", "t": "18:00", "vn": "Mercedes-Benz Stadium", "vc": "Atlanta", "vf": "us"}, {"i": 79, "g": null, "p": "Dieciseisavos", "j": null, "h": "1º Grupo G", "hf": null, "a": "2º Grupo A", "af": null, "d": "2026-06-29", "t": "21:00", "vn": "AT&T Stadium", "vc": "Dallas", "vf": "us"}, {"i": 80, "g": null, "p": "Dieciseisavos", "j": null, "h": "1º Grupo H", "hf": null, "a": "2º Grupo B", "af": null, "d": "2026-06-29", "t": "12:00", "vn": "Lincoln Financial Field", "vc": "Filadelfia", "vf": "us"}, {"i": 81, "g": null, "p": "Dieciseisavos", "j": null, "h": "1º Grupo I", "hf": null, "a": "2º Grupo C", "af": null, "d": "2026-06-30", "t": "15:00", "vn": "Lumen Field", "vc": "Seattle", "vf": "us"}, {"i": 82, "g": null, "p": "Dieciseisavos", "j": null, "h": "1º Grupo J", "hf": null, "a": "2º Grupo D", "af": null, "d": "2026-06-30", "t": "18:00", "vn": "Arrowhead Stadium", "vc": "Kansas City", "vf": "us"}, {"i": 83, "g": null, "p": "Dieciseisavos", "j": null, "h": "1º Grupo K", "hf": null, "a": "2º Grupo E", "af": null, "d": "2026-06-30", "t": "21:00", "vn": "Gillette Stadium", "vc": "Boston", "vf": "us"}, {"i": 84, "g": null, "p": "Dieciseisavos", "j": null, "h": "1º Grupo L", "hf": null, "a": "2º Grupo F", "af": null, "d": "2026-06-30", "t": "12:00", "vn": "Levi's Stadium", "vc": "San Francisco", "vf": "us"}, {"i": 85, "g": null, "p": "Dieciseisavos", "j": null, "h": "2º Grupo A", "hf": null, "a": "3º Mejor E", "af": null, "d": "2026-07-01", "t": "15:00", "vn": "Estadio Akron", "vc": "Guadalajara", "vf": "mx"}, {"i": 86, "g": null, "p": "Dieciseisavos", "j": null, "h": "2º Grupo B", "hf": null, "a": "3º Mejor F", "af": null, "d": "2026-07-01", "t": "18:00", "vn": "Estadio BBVA", "vc": "Monterrey", "vf": "mx"}, {"i": 87, "g": null, "p": "Dieciseisavos", "j": null, "h": "2º Grupo C", "hf": null, "a": "3º Mejor G", "af": null, "d": "2026-07-01", "t": "21:00", "vn": "BMO Field", "vc": "Toronto", "vf": "ca"}, {"i": 88, "g": null, "p": "Dieciseisavos", "j": null, "h": "2º Grupo D", "hf": null, "a": "3º Mejor H", "af": null, "d": "2026-07-01", "t": "12:00", "vn": "BC Place", "vc": "Vancouver", "vf": "ca"}, {"i": 89, "g": null, "p": "Octavos de final", "j": null, "h": "Ganador D1", "hf": null, "a": "Ganador D2", "af": null, "d": "2026-07-03", "t": "15:00", "vn": "MetLife Stadium", "vc": "Nueva York/NJ", "vf": "us"}, {"i": 90, "g": null, "p": "Octavos de final", "j": null, "h": "Ganador D3", "hf": null, "a": "Ganador D4", "af": null, "d": "2026-07-03", "t": "18:00", "vn": "Estadio Azteca", "vc": "Ciudad de México", "vf": "mx"}, {"i": 91, "g": null, "p": "Octavos de final", "j": null, "h": "Ganador D5", "hf": null, "a": "Ganador D6", "af": null, "d": "2026-07-03", "t": "21:00", "vn": "SoFi Stadium", "vc": "Los Ángeles", "vf": "us"}, {"i": 92, "g": null, "p": "Octavos de final", "j": null, "h": "Ganador D7", "hf": null, "a": "Ganador D8", "af": null, "d": "2026-07-04", "t": "12:00", "vn": "Hard Rock Stadium", "vc": "Miami", "vf": "us"}, {"i": 93, "g": null, "p": "Octavos de final", "j": null, "h": "Ganador D9", "hf": null, "a": "Ganador D10", "af": null, "d": "2026-07-04", "t": "15:00", "vn": "NRG Stadium", "vc": "Houston", "vf": "us"}, {"i": 94, "g": null, "p": "Octavos de final", "j": null, "h": "Ganador D11", "hf": null, "a": "Ganador D12", "af": null, "d": "2026-07-04", "t": "18:00", "vn": "Mercedes-Benz Stadium", "vc": "Atlanta", "vf": "us"}, {"i": 95, "g": null, "p": "Octavos de final", "j": null, "h": "Ganador D13", "hf": null, "a": "Ganador D14", "af": null, "d": "2026-07-05", "t": "21:00", "vn": "AT&T Stadium", "vc": "Dallas", "vf": "us"}, {"i": 96, "g": null, "p": "Octavos de final", "j": null, "h": "Ganador D15", "hf": null, "a": "Ganador D16", "af": null, "d": "2026-07-05", "t": "12:00", "vn": "Lincoln Financial Field", "vc": "Filadelfia", "vf": "us"}, {"i": 97, "g": null, "p": "Cuartos de final", "j": null, "h": "Ganador OF1", "hf": null, "a": "Ganador OF2", "af": null, "d": "2026-07-08", "t": "18:00", "vn": "MetLife Stadium", "vc": "Nueva York/NJ", "vf": "us"}, {"i": 98, "g": null, "p": "Cuartos de final", "j": null, "h": "Ganador OF3", "hf": null, "a": "Ganador OF4", "af": null, "d": "2026-07-08", "t": "21:00", "vn": "SoFi Stadium", "vc": "Los Ángeles", "vf": "us"}, {"i": 99, "g": null, "p": "Cuartos de final", "j": null, "h": "Ganador OF5", "hf": null, "a": "Ganador OF6", "af": null, "d": "2026-07-09", "t": "18:00", "vn": "AT&T Stadium", "vc": "Dallas", "vf": "us"}, {"i": 100, "g": null, "p": "Cuartos de final", "j": null, "h": "Ganador OF7", "hf": null, "a": "Ganador OF8", "af": null, "d": "2026-07-09", "t": "21:00", "vn": "Hard Rock Stadium", "vc": "Miami", "vf": "us"}, {"i": 101, "g": null, "p": "Semifinal", "j": null, "h": "Ganador CF1", "hf": null, "a": "Ganador CF2", "af": null, "d": "2026-07-12", "t": "21:00", "vn": "SoFi Stadium", "vc": "Los Ángeles", "vf": "us"}, {"i": 102, "g": null, "p": "Semifinal", "j": null, "h": "Ganador CF3", "hf": null, "a": "Ganador CF4", "af": null, "d": "2026-07-13", "t": "21:00", "vn": "MetLife Stadium", "vc": "Nueva York/NJ", "vf": "us"}, {"i": 103, "g": null, "p": "Tercer puesto", "j": null, "h": "Perdedor SF1", "hf": null, "a": "Perdedor SF2", "af": null, "d": "2026-07-18", "t": "21:00", "vn": "Hard Rock Stadium", "vc": "Miami", "vf": "us"}, {"i": 104, "g": null, "p": "FINAL", "j": null, "h": "Ganador SF1", "hf": null, "a": "Ganador SF2", "af": null, "d": "2026-07-19", "t": "21:00", "vn": "MetLife Stadium", "vc": "Nueva York/NJ", "vf": "us"}];

const PHASES=["Fase de grupos","Dieciseisavos","Octavos de final","Cuartos de final","Semifinal","Tercer puesto","FINAL"];
const GROUPS="ABCDEFGHIJKL".split("");
const MONTHS_ES={"06":"Junio","07":"Julio"};
const DAYS_ES=["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"];
const DAYS_FULL=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
const fmtDate=(s: string)=>{const d=new Date(s+"T12:00:00");return`${DAYS_FULL[d.getDay()]} ${d.getDate()} de ${MONTHS_ES[s.split("-")[1] as keyof typeof MONTHS_ES]}`};
const fmtShort=(s: string)=>{const p=s.split("-");return`${parseInt(p[2])} ${p[1]==="06"?"Jun":"Jul"}`};
const flagUrl=(code: string | null,w=80)=>code&&code!=="tbd"?`https://flagcdn.com/w${w}/${code}.png`:null;

// Staggered reveal hook
function useStagger(items,visible){
  const[revealed,setRevealed]=useState([]);
  useEffect(()=>{
    if(!visible){setRevealed([]);return}
    const timers=items.map((_,i)=>setTimeout(()=>setRevealed(r=>[...r,i]),i*40));
    return()=>timers.forEach(clearTimeout);
  },[visible,items.length]);
  return revealed;
}

function useInView(th=0.1){
  const ref=useRef(null);const[v,setV]=useState(false);
  useEffect(()=>{if(!ref.current)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);o.disconnect()}},{threshold:th,root:null});o.observe(ref.current);return()=>o.disconnect()},[]);
  return[ref,v];
}

// ═══ PHASE BADGE ═══
function PhaseBadge({phase,group,jornada,size="sm"}){
  const sp=phase==="FINAL"||phase==="Semifinal";
  const ko=!group;
  const s=size==="lg"?{fs:11,px:14,py:4,r:10}:{fs:9,px:8,py:2,r:5};
  return(
    <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
      {group&&<span style={{fontSize:s.fs,fontWeight:900,color:GOLD,background:"rgba(201,168,76,0.12)",padding:`${s.py}px ${s.px}px`,borderRadius:s.r,letterSpacing:1,border:"1px solid rgba(201,168,76,0.1)"}}>GRUPO {group}</span>}
      {ko&&<span style={{fontSize:s.fs,fontWeight:900,padding:`${s.py}px ${s.px}px`,borderRadius:s.r,letterSpacing:1,color:sp?BG:GOLD,background:sp?`linear-gradient(135deg,${GOLD},${GOLD2})`:"rgba(201,168,76,0.12)",border:sp?"none":"1px solid rgba(201,168,76,0.1)",textShadow:sp?"0 1px 2px rgba(0,0,0,0.3)":"none"}}>{phase.toUpperCase()}</span>}
      {jornada&&<span style={{fontSize:s.fs-1,color:DARK,fontWeight:600}}>Jornada {jornada}</span>}
    </div>
  );
}

// ═══ MATCH CARD — SPECTACULAR ═══
function MatchCard({m,index,visible,onClick}){
  const[hov,setHov]=useState(false);
  const sp=m.p==="FINAL"||m.p==="Semifinal";
  const hFlag=flagUrl(m.hf,160);
  const aFlag=flagUrl(m.af,160);

  return(
    <div
      onClick={onClick}
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={()=>setHov(false)}
      style={{
        borderRadius:20,cursor:"pointer",position:"relative",overflow:"hidden",
        opacity:visible?1:0,transform:visible?"translateY(0) scale(1)":"translateY(20px) scale(0.97)",
        transition:`opacity 0.5s ease ${index*0.04}s, transform 0.5s ease ${index*0.04}s, box-shadow 0.4s, border-color 0.4s`,
        border:`1px solid ${hov?"rgba(201,168,76,0.35)":sp?"rgba(201,168,76,0.2)":"rgba(255,255,255,0.04)"}`,
        boxShadow:hov?"0 16px 48px rgba(201,168,76,0.08), 0 4px 16px rgba(0,0,0,0.4)":"0 2px 8px rgba(0,0,0,0.2)",
        background:BG2,
      }}
    >
      {/* Flag backgrounds */}
      {hFlag&&<img src={hFlag} alt="" style={{position:"absolute",left:-10,top:"50%",transform:"translateY(-50%)",width:110,height:74,objectFit:"cover",opacity:hov?0.08:0.04,filter:"blur(2px)",transition:"opacity 0.5s"}}/>}
      {aFlag&&<img src={aFlag} alt="" style={{position:"absolute",right:-10,top:"50%",transform:"translateY(-50%)",width:110,height:74,objectFit:"cover",opacity:hov?0.08:0.04,filter:"blur(2px)",transition:"opacity 0.5s"}}/>}

      {/* Glow on hover */}
      <div style={{position:"absolute",top:-30,left:"50%",transform:"translateX(-50%)",width:160,height:80,borderRadius:"50%",background:GOLD,filter:"blur(50px)",opacity:hov?0.06:0,transition:"opacity 0.5s",pointerEvents:"none"}}/>

      {/* Gradient overlay */}
      <div style={{position:"absolute",inset:0,background:sp?`linear-gradient(135deg,rgba(201,168,76,0.05),transparent 40%,rgba(201,168,76,0.03))`:hov?`linear-gradient(180deg,rgba(201,168,76,0.03),transparent)`:"none",transition:"all 0.5s",pointerEvents:"none"}}/>

      {/* Content */}
      <div style={{position:"relative",zIndex:1}}>
        {/* Top bar */}
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px 6px"}}>
          <PhaseBadge phase={m.p} group={m.g} jornada={m.j}/>
          <span style={{fontSize:12,fontWeight:700,color:GOLD,fontVariantNumeric:"tabular-nums"}}>{m.t}</span>
        </div>

        {/* Teams */}
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"10px 16px 10px"}}>
          <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"flex-end",gap:8,minWidth:0}}>
            <span style={{fontSize:14,fontWeight:700,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:hov?"#fff":"#d0d4de",transition:"color 0.3s"}}>{m.h}</span>
            {m.hf&&m.hf!=="tbd"?(
              <div style={{width:32,height:22,borderRadius:3,overflow:"hidden",flexShrink:0,boxShadow:"0 2px 8px rgba(0,0,0,0.3)",border:"1px solid rgba(255,255,255,0.08)"}}>
                <img src={flagUrl(m.hf,80)} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
              </div>
            ):<div style={{width:32,height:22,borderRadius:3,background:"rgba(255,255,255,0.06)",flexShrink:0}}/>}
          </div>

          <div style={{width:36,height:36,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,background:hov?"rgba(201,168,76,0.12)":"rgba(255,255,255,0.03)",border:`1px solid ${hov?"rgba(201,168,76,0.2)":"rgba(255,255,255,0.04)"}`,transition:"all 0.4s"}}>
            <span style={{fontSize:10,fontWeight:900,color:hov?GOLD:DIM,transition:"color 0.3s"}}>VS</span>
          </div>

          <div style={{flex:1,display:"flex",alignItems:"center",gap:8,minWidth:0}}>
            {m.af&&m.af!=="tbd"?(
              <div style={{width:32,height:22,borderRadius:3,overflow:"hidden",flexShrink:0,boxShadow:"0 2px 8px rgba(0,0,0,0.3)",border:"1px solid rgba(255,255,255,0.08)"}}>
                <img src={flagUrl(m.af,80)} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
              </div>
            ):<div style={{width:32,height:22,borderRadius:3,background:"rgba(255,255,255,0.06)",flexShrink:0}}/>}
            <span style={{fontSize:14,fontWeight:700,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:hov?"#fff":"#d0d4de",transition:"color 0.3s"}}>{m.a}</span>
          </div>
        </div>

        {/* Venue */}
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:5,padding:"4px 16px 12px"}}>
          {m.vf&&<img src={flagUrl(m.vf,20)} alt="" style={{width:12,height:8,borderRadius:1,objectFit:"cover"}}/>}
          <span style={{fontSize:10,color:hov?MID:DARK,transition:"color 0.3s"}}>{m.vn} · {m.vc}</span>
        </div>
      </div>
    </div>
  );
}

// ═══ MATCH DETAIL — CINEMATIC ═══
function MatchDetail({m,onBack,onNav}){
  const sp=m.p==="FINAL"||m.p==="Semifinal";
  const sameDay=M.filter(x=>x.d===m.d&&x.i!==m.i).slice(0,6);
  const groupM=m.g?M.filter(x=>x.g===m.g&&x.i!==m.i):[];
  const idx=M.findIndex(x=>x.i===m.i);
  const[entered,setEntered]=useState(false);
  useEffect(()=>{setTimeout(()=>setEntered(true),50);return()=>setEntered(false)},[m.i]);

  const hFlag=flagUrl(m.hf,320);
  const aFlag=flagUrl(m.af,320);

  return(
    <div style={{maxWidth:900,margin:"0 auto",opacity:entered?1:0,transform:entered?"translateY(0)":"translateY(16px)",transition:"all 0.5s ease"}}>
      <button onClick={onBack} style={{background:"none",border:"none",color:GOLD,cursor:"pointer",fontSize:13,fontWeight:600,fontFamily:"inherit",marginBottom:20,display:"flex",alignItems:"center",gap:6}}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        Volver al calendario
      </button>

      {/* Hero card */}
      <div style={{borderRadius:28,overflow:"hidden",marginBottom:32,position:"relative",
        background:`linear-gradient(135deg,${BG2},${BG3})`,
        border:sp?"1.5px solid rgba(201,168,76,0.25)":"1px solid rgba(255,255,255,0.06)",
        boxShadow:sp?"0 0 60px rgba(201,168,76,0.06)":"0 8px 40px rgba(0,0,0,0.3)",
      }}>
        {/* Flag backgrounds large */}
        {hFlag&&<img src={hFlag} alt="" style={{position:"absolute",left:"-5%",top:"50%",transform:"translateY(-50%)",width:"35%",maxWidth:280,opacity:0.06,filter:"blur(4px)",pointerEvents:"none"}}/>}
        {aFlag&&<img src={aFlag} alt="" style={{position:"absolute",right:"-5%",top:"50%",transform:"translateY(-50%)",width:"35%",maxWidth:280,opacity:0.06,filter:"blur(4px)",pointerEvents:"none"}}/>}

        {/* Field lines */}
        <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.018,pointerEvents:"none"}} viewBox="0 0 900 450" preserveAspectRatio="xMidYMid slice">
          <rect x="40" y="30" width="820" height="390" fill="none" stroke="#c9a84c" strokeWidth="1.5"/>
          <line x1="450" y1="30" x2="450" y2="420" stroke="#c9a84c" strokeWidth="1.5"/>
          <circle cx="450" cy="225" r="70" fill="none" stroke="#c9a84c" strokeWidth="1.5"/>
          <circle cx="450" cy="225" r="3" fill="#c9a84c"/>
          <rect x="40" y="130" width="100" height="190" fill="none" stroke="#c9a84c" strokeWidth="1"/>
          <rect x="760" y="130" width="100" height="190" fill="none" stroke="#c9a84c" strokeWidth="1"/>
          <path d="M140 180 Q175 225 140 270" fill="none" stroke="#c9a84c" strokeWidth="1"/>
          <path d="M760 180 Q725 225 760 270" fill="none" stroke="#c9a84c" strokeWidth="1"/>
        </svg>

        {/* Radial glows */}
        <div style={{position:"absolute",top:"30%",left:"25%",width:200,height:200,borderRadius:"50%",background:"rgba(201,168,76,0.03)",filter:"blur(60px)",pointerEvents:"none"}}/>
        <div style={{position:"absolute",bottom:"20%",right:"25%",width:180,height:180,borderRadius:"50%",background:"rgba(201,168,76,0.02)",filter:"blur(50px)",pointerEvents:"none"}}/>

        <div style={{position:"relative",padding:"clamp(28px,5vw,48px) clamp(20px,4vw,40px)"}}>
          {/* Badge row */}
          <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",gap:12,marginBottom:32}}>
            <PhaseBadge phase={m.p} group={m.g} jornada={m.j} size="lg"/>
            <div style={{height:16,width:1,background:"rgba(255,255,255,0.08)"}}/>
            <span style={{fontSize:15,color:MID,fontWeight:600}}>{fmtDate(m.d)}</span>
            <div style={{padding:"4px 12px",borderRadius:8,background:"rgba(201,168,76,0.08)",border:"1px solid rgba(201,168,76,0.15)"}}>
              <span style={{fontSize:15,fontWeight:800,color:GOLD}}>{m.t}</span>
            </div>
          </div>

          {/* Teams face-off */}
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"clamp(16px,5vw,50px)",marginBottom:28}}>
            <div style={{textAlign:"center",flex:"0 1 220px"}}>
              {m.hf&&m.hf!=="tbd"?(
                <div style={{width:"clamp(60px,12vw,90px)",height:"clamp(40px,8vw,60px)",borderRadius:8,overflow:"hidden",margin:"0 auto",boxShadow:"0 4px 20px rgba(0,0,0,0.4)",border:"2px solid rgba(255,255,255,0.08)"}}>
                  <img src={flagUrl(m.hf,160)} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                </div>
              ):<div style={{width:80,height:54,borderRadius:8,background:"rgba(255,255,255,0.05)",margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:20,color:DIM}}>?</span></div>}
              <h2 style={{fontWeight:900,fontSize:"clamp(18px,3.5vw,28px)",marginTop:12,letterSpacing:-0.5}}>{m.h}</h2>
            </div>

            <div style={{position:"relative"}}>
              <div style={{width:60,height:60,borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",
                background:"linear-gradient(135deg,rgba(201,168,76,0.1),rgba(201,168,76,0.03))",
                border:"1.5px solid rgba(201,168,76,0.2)",boxShadow:"0 0 30px rgba(201,168,76,0.05)",
              }}>
                <span style={{fontSize:18,fontWeight:900,color:GOLD}}>VS</span>
              </div>
              {/* Decorative lines */}
              <div style={{position:"absolute",top:"50%",left:-30,width:24,height:1,background:"rgba(201,168,76,0.15)"}}/>
              <div style={{position:"absolute",top:"50%",right:-30,width:24,height:1,background:"rgba(201,168,76,0.15)"}}/>
            </div>

            <div style={{textAlign:"center",flex:"0 1 220px"}}>
              {m.af&&m.af!=="tbd"?(
                <div style={{width:"clamp(60px,12vw,90px)",height:"clamp(40px,8vw,60px)",borderRadius:8,overflow:"hidden",margin:"0 auto",boxShadow:"0 4px 20px rgba(0,0,0,0.4)",border:"2px solid rgba(255,255,255,0.08)"}}>
                  <img src={flagUrl(m.af,160)} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                </div>
              ):<div style={{width:80,height:54,borderRadius:8,background:"rgba(255,255,255,0.05)",margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:20,color:DIM}}>?</span></div>}
              <h2 style={{fontWeight:900,fontSize:"clamp(18px,3.5vw,28px)",marginTop:12,letterSpacing:-0.5}}>{m.a}</h2>
            </div>
          </div>

          {/* Venue */}
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:6,padding:"10px 16px",borderRadius:12,background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.04)",maxWidth:400,margin:"0 auto"}}>
            {m.vf&&<img src={flagUrl(m.vf,40)} alt="" style={{width:18,height:12,borderRadius:2,objectFit:"cover"}}/>}
            <span style={{fontSize:13,color:MID,fontWeight:600}}>{m.vn}</span>
            <span style={{color:"rgba(255,255,255,0.1)"}}>·</span>
            <span style={{fontSize:13,color:DIM}}>{m.vc}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(170px,1fr))",gap:10,marginBottom:36}}>
        {[
          {e:"🎯",t:"Predice",s:"8 tipos de predicción",c:"rgba(201,168,76,0.06)",bc:"rgba(201,168,76,0.15)"},
          {e:"🏆",t:"Fantasy",s:"Arma tu equipo ideal",c:"rgba(0,180,255,0.04)",bc:"rgba(0,180,255,0.1)"},
          {e:"⚡",t:"Trivia",s:"Gana puntos extra",c:"rgba(34,197,94,0.04)",bc:"rgba(34,197,94,0.1)"},
          {e:"📺",t:"Streaming",s:"Míralo con creadores",c:"rgba(168,85,247,0.04)",bc:"rgba(168,85,247,0.1)"},
        ].map(a=>(
          <div key={a.t} style={{padding:16,borderRadius:16,textAlign:"center",background:`linear-gradient(135deg,${a.c},${BG2})`,border:`1px solid ${a.bc}`,cursor:"pointer",transition:"all .35s"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 12px 32px rgba(0,0,0,0.3)"}}
            onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none"}}
          >
            <span style={{fontSize:26,display:"block",marginBottom:6}}>{a.e}</span>
            <span style={{fontWeight:700,fontSize:14}}>{a.t}</span>
            <p style={{fontSize:11,color:DIM,marginTop:3}}>{a.s}</p>
          </div>
        ))}
      </div>

      {/* Group matches */}
      {groupM.length>0&&(
        <div style={{marginBottom:32,padding:20,borderRadius:20,background:BG2,border:"1px solid rgba(255,255,255,0.04)"}}>
          <h3 style={{fontWeight:700,fontSize:16,marginBottom:14}}><span style={{color:GOLD}}>Grupo {m.g}</span> — Otros partidos</h3>
          <div style={{display:"flex",flexDirection:"column",gap:6}}>
            {groupM.map(x=>(
              <div key={x.i} onClick={()=>onNav(x.i)} style={{display:"flex",alignItems:"center",gap:8,padding:"10px 14px",borderRadius:12,background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.03)",cursor:"pointer",transition:"all .3s"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(201,168,76,0.2)";e.currentTarget.style.background="rgba(201,168,76,0.03)"}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.03)";e.currentTarget.style.background="rgba(255,255,255,0.02)"}}
              >
                <span style={{fontSize:9,fontWeight:900,color:GOLD,background:"rgba(201,168,76,0.1)",padding:"2px 7px",borderRadius:4,flexShrink:0}}>J{x.j}</span>
                <div style={{flex:1,display:"flex",alignItems:"center",gap:6,minWidth:0}}>
                  {x.hf&&x.hf!=="tbd"&&<img src={flagUrl(x.hf,40)} alt="" style={{width:18,height:12,borderRadius:2,objectFit:"cover"}}/>}
                  <span style={{fontSize:13,fontWeight:600}}>{x.h}</span>
                  <span style={{fontSize:10,color:DARK}}>vs</span>
                  <span style={{fontSize:13,fontWeight:600}}>{x.a}</span>
                  {x.af&&x.af!=="tbd"&&<img src={flagUrl(x.af,40)} alt="" style={{width:18,height:12,borderRadius:2,objectFit:"cover"}}/>}
                </div>
                <span style={{fontSize:11,color:DIM,flexShrink:0}}>{fmtShort(x.d)} · {x.t}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Same day */}
      {sameDay.length>0&&(
        <div style={{marginBottom:32}}>
          <h3 style={{fontWeight:700,fontSize:16,marginBottom:14}}>Mismo día <span style={{color:GOLD}}>{fmtShort(m.d)}</span></h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:8}}>
            {sameDay.map(x=>(
              <div key={x.i} onClick={()=>onNav(x.i)} style={{display:"flex",alignItems:"center",gap:6,padding:"10px 14px",borderRadius:12,background:BG2,border:"1px solid rgba(255,255,255,0.04)",cursor:"pointer",transition:"all .3s"}}
                onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(201,168,76,0.2)"}
                onMouseLeave={e=>e.currentTarget.style.borderColor="rgba(255,255,255,0.04)"}
              >
                {x.hf&&x.hf!=="tbd"&&<img src={flagUrl(x.hf,40)} alt="" style={{width:18,height:12,borderRadius:2}}/>}
                <span style={{fontSize:12,fontWeight:600,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{x.h} vs {x.a}</span>
                {x.af&&x.af!=="tbd"&&<img src={flagUrl(x.af,40)} alt="" style={{width:18,height:12,borderRadius:2}}/>}
                <span style={{fontSize:12,fontWeight:700,color:GOLD,flexShrink:0}}>{x.t}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Prev/Next */}
      <div style={{display:"flex",justifyContent:"space-between",paddingTop:18,borderTop:"1px solid rgba(255,255,255,0.04)"}}>
        {idx>0?<button onClick={()=>onNav(M[idx-1].i)} style={{background:"none",border:"none",color:DIM,cursor:"pointer",fontSize:12,fontFamily:"inherit",display:"flex",alignItems:"center",gap:4,transition:"color .3s"}} onMouseEnter={e=>e.currentTarget.style.color=GOLD} onMouseLeave={e=>e.currentTarget.style.color=DIM}>← {M[idx-1].h} vs {M[idx-1].a}</button>:<span/>}
        {idx<M.length-1?<button onClick={()=>onNav(M[idx+1].i)} style={{background:"none",border:"none",color:DIM,cursor:"pointer",fontSize:12,fontFamily:"inherit",display:"flex",alignItems:"center",gap:4,transition:"color .3s"}} onMouseEnter={e=>e.currentTarget.style.color=GOLD} onMouseLeave={e=>e.currentTarget.style.color=DIM}>{M[idx+1].h} vs {M[idx+1].a} →</button>:<span/>}
      </div>
    </div>
  );
}

// ═══ DATE GROUP SECTION ═══
function DateGroup({dateKey,matches,viewMode,onMatchClick}){
  const[ref,vis]=useInView(0.05);
  const revealed=useStagger(matches,vis);

  return(
    <div ref={ref} style={{marginBottom:40}}>
      {/* Date header with timeline dot */}
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14,position:"sticky",top:0,zIndex:10,padding:"10px 0",background:`linear-gradient(180deg,${BG} 70%,transparent)`}}>
        <div style={{width:10,height:10,borderRadius:"50%",background:GOLD,boxShadow:`0 0 10px rgba(201,168,76,0.3)`,flexShrink:0}}/>
        <div style={{height:1,width:16,background:"rgba(201,168,76,0.2)"}}/>
        {viewMode==="date"?(
          <div style={{display:"flex",alignItems:"baseline",gap:10}}>
            <span style={{fontSize:14,fontWeight:900,color:GOLD,background:"rgba(201,168,76,0.08)",padding:"4px 12px",borderRadius:8,border:"1px solid rgba(201,168,76,0.1)"}}>{fmtShort(dateKey)}</span>
            <span style={{fontSize:13,color:MID,fontWeight:500}}>{fmtDate(dateKey)}</span>
            <span style={{fontSize:11,color:DARK}}>{matches.length} partidos</span>
          </div>
        ):(
          <div style={{display:"flex",alignItems:"baseline",gap:10}}>
            <span style={{fontSize:14,fontWeight:900,color:GOLD}}>{dateKey}</span>
            <span style={{fontSize:11,color:DARK}}>{matches.length} partidos</span>
          </div>
        )}
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(290px,1fr))",gap:10,paddingLeft:4}}>
        {matches.map((m,i)=>(
          <MatchCard key={m.i} m={m} index={i} visible={revealed.includes(i)} onClick={()=>onMatchClick(m.i)}/>
        ))}
      </div>
    </div>
  );
}

// ═══ FILTER BUTTON ═══
function Btn({label,active,onClick,accent}){
  const[hov,setHov]=useState(false);
  return(
    <button onClick={onClick} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{
        padding:"6px 13px",borderRadius:8,fontFamily:"inherit",cursor:"pointer",whiteSpace:"nowrap",
        fontSize:11,fontWeight:600,transition:"all .25s",
        border:`1px solid ${active?"rgba(201,168,76,0.3)":hov?"rgba(255,255,255,0.1)":"rgba(255,255,255,0.05)"}`,
        background:active?"rgba(201,168,76,0.1)":hov?"rgba(255,255,255,0.03)":"transparent",
        color:active?GOLD:hov?"#fff":DIM,
      }}
    >{label}</button>
  );
}

// ═══ MAIN PAGE ═══
export default function PartidosPage(){
  const[phase,setPhase]=useState("all");
  const[group,setGroup]=useState("all");
  const[view,setView]=useState("date");
  const[selected,setSelected]=useState(null);
  const scrollRef=useRef(null);

  const filtered=useMemo(()=>M.filter(m=>{
    if(phase!=="all"&&m.p!==phase)return false;
    if(group!=="all"&&m.g!==group)return false;
    return true;
  }),[phase,group]);

  const grouped=useMemo(()=>{
    const map=new Map();
    filtered.forEach(m=>{const k=view==="date"?m.d:m.p;if(!map.has(k))map.set(k,[]);map.get(k).push(m)});
    if(view==="phase")return new Map([...map.entries()].sort((a,b)=>PHASES.indexOf(a[0])-PHASES.indexOf(b[0])));
    return new Map([...map.entries()].sort());
  },[filtered,view]);

  const navTo=(id)=>{
    setSelected(M.find(x=>x.i===id));
    if(scrollRef.current)scrollRef.current.scrollTop=0;
  };

  return(
    <div ref={scrollRef} style={{background:BG,color:"#fff",fontFamily:"'Outfit',sans-serif",height:"100vh",overflowY:"auto",overflowX:"hidden"}}>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box}
        ::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:${BG}}::-webkit-scrollbar-thumb{background:rgba(201,168,76,0.2);border-radius:3px}
        ::selection{background:rgba(201,168,76,0.3)}
        @keyframes pulse-dot{0%,100%{box-shadow:0 0 0 0 rgba(201,168,76,0.3)}70%{box-shadow:0 0 0 8px rgba(201,168,76,0)}}
      `}</style>

      <div style={{maxWidth:1120,margin:"0 auto",padding:"32px 16px 80px"}}>
        {selected?(
          <MatchDetail m={selected} onBack={()=>setSelected(null)} onNav={navTo}/>
        ):(
          <>
            {/* Hero header */}
            <div style={{marginBottom:36,position:"relative"}}>
              <div style={{position:"absolute",top:-20,right:0,width:200,height:200,borderRadius:"50%",background:"rgba(201,168,76,0.03)",filter:"blur(60px)",pointerEvents:"none"}}/>
              <span style={{color:GOLD,fontSize:11,fontWeight:700,letterSpacing:3,textTransform:"uppercase"}}>104 Partidos · 16 Sedes · 39 Días</span>
              <h1 style={{fontSize:"clamp(28px,5vw,44px)",fontWeight:900,marginTop:8,marginBottom:10,lineHeight:1.08}}>
                Calendario del<br/><span style={{background:`linear-gradient(135deg,${GOLD},${GOLD2})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Mundial 2026</span>
              </h1>
              <p style={{color:MID,maxWidth:500,fontSize:15,lineHeight:1.6}}>Desde la inauguración en el Estadio Azteca hasta la gran final en el MetLife Stadium.</p>
            </div>

            {/* Filters */}
            <div style={{marginBottom:28,display:"flex",flexDirection:"column",gap:10,padding:16,borderRadius:16,background:BG2,border:"1px solid rgba(255,255,255,0.04)"}}>
              <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
                <span style={{fontSize:11,color:DIM,fontWeight:700,minWidth:50}}>Ver por</span>
                <Btn label="📅 Fecha" active={view==="date"} onClick={()=>setView("date")}/>
                <Btn label="🏆 Fase" active={view==="phase"} onClick={()=>setView("phase")}/>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:5,overflowX:"auto",paddingBottom:2}}>
                <span style={{fontSize:11,color:DIM,fontWeight:700,minWidth:50,flexShrink:0}}>Fase</span>
                <Btn label="Todas" active={phase==="all"} onClick={()=>setPhase("all")}/>
                {PHASES.map(p=><Btn key={p} label={p} active={phase===p} onClick={()=>setPhase(p)}/>)}
              </div>
              {(phase==="all"||phase==="Fase de grupos")&&(
                <div style={{display:"flex",alignItems:"center",gap:5,overflowX:"auto",paddingBottom:2}}>
                  <span style={{fontSize:11,color:DIM,fontWeight:700,minWidth:50,flexShrink:0}}>Grupo</span>
                  <Btn label="Todos" active={group==="all"} onClick={()=>setGroup("all")}/>
                  {GROUPS.map(g=><Btn key={g} label={g} active={group===g} onClick={()=>setGroup(g)}/>)}
                </div>
              )}
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <span style={{fontSize:12,color:DARK,fontWeight:600}}>{filtered.length} partidos encontrados</span>
                {(phase!=="all"||group!=="all")&&(
                  <button onClick={()=>{setPhase("all");setGroup("all")}} style={{background:"none",border:"none",color:GOLD,cursor:"pointer",fontSize:11,fontWeight:600,fontFamily:"inherit"}}>Limpiar filtros</button>
                )}
              </div>
            </div>

            {/* Timeline + Match list */}
            <div style={{position:"relative",paddingLeft:8}}>
              {/* Vertical timeline line */}
              <div style={{position:"absolute",left:12,top:0,bottom:0,width:1,background:"linear-gradient(180deg,rgba(201,168,76,0.2),rgba(201,168,76,0.05))",pointerEvents:"none"}}/>

              {[...grouped.entries()].map(([key,matches])=>(
                <DateGroup key={key} dateKey={key} matches={matches} viewMode={view} onMatchClick={navTo}/>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
