import { createIcons, icons } from 'lucide';

const htmlContent = `
  <!-- Navbar -->
  <nav class="fixed w-full bg-white border-b border-slate-200 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <div class="flex items-center gap-4">
          <button id="mobile-menu-btn" class="lg:hidden p-2 text-slate-600">
            <i data-lucide="menu"></i>
          </button>
          <div>
            <h1 class="text-xl font-bold text-slate-900 tracking-tight">MANUAL INTERACTIVO</h1>
            <p class="text-[10px] md:text-xs text-slate-500 font-medium tracking-wider">U.E.E JORGE SEMIDEY | PNF INFORMÁTICA</p>
          </div>
        </div>
        <div class="hidden lg:flex space-x-6 text-sm font-bold text-slate-600 tracking-wider">
          <a href="#inicio" class="hover:text-blue-600 transition-colors">INICIO</a>
          <a href="#comunidad" class="hover:text-blue-600 transition-colors">COMUNIDAD</a>
          <a href="#introduccion" class="hover:text-blue-600 transition-colors">INTRODUCCIÓN</a>
          <a href="#hardware" class="hover:text-blue-600 transition-colors">HARDWARE</a>
          <a href="#herramientas" class="hover:text-blue-600 transition-colors">HERRAMIENTAS</a>
          <a href="#glosario" class="hover:text-blue-600 transition-colors">GLOSARIO</a>
          <a href="#creditos" class="hover:text-blue-600 transition-colors">CRÉDITOS</a>
        </div>
      </div>
    </div>
  </nav>

  <main class="pt-24 pb-16">
    <!-- Hero Section -->
    <section id="inicio" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-5xl lg:text-7xl font-black text-blue-900 leading-tight mb-6 tracking-tighter">MANTENIMIENTO<br/>INTEGRAL.</h2>
        <p class="text-xl font-bold text-slate-700 mb-6 uppercase tracking-wide">GUÍA DEFINITIVA PARA LA OPTIMIZACIÓN DE HARDWARE Y SOFTWARE EDUCATIVO CANAIMA.</p>
        <p class="text-lg text-slate-600 leading-relaxed">Este manual técnico interactivo ha sido diseñado por estudiantes de la UPT Aragua para servir como recurso maestro en la <span class="font-bold">U.E.E "Jorge Semidey"</span>.</p>
      </div>
      <div class="border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center p-12 aspect-video bg-slate-50 text-slate-400">
        <i data-lucide="image" class="w-16 h-16 mb-4"></i>
        <p class="text-sm font-bold text-slate-500 tracking-widest">ARRASTRA IMAGEN</p>
      </div>
    </section>

    <!-- Cards Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8">
      <div class="bg-slate-100 rounded-3xl p-8 flex flex-col items-center justify-center min-h-[300px] text-center">
        <h3 class="text-2xl font-black text-slate-800 mb-4 tracking-tight">RESUMEN DEL PROYECTO</h3>
        <div class="border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center p-8 w-full bg-white text-slate-400">
          <i data-lucide="image" class="w-8 h-8 mb-2"></i>
          <p class="text-xs font-bold text-slate-500 tracking-widest">ARRASTRA IMAGEN</p>
        </div>
      </div>
      <div class="bg-slate-100 rounded-3xl p-8 flex flex-col items-center justify-center min-h-[300px] text-center">
        <h3 class="text-2xl font-black text-slate-800 mb-4 tracking-tight">TÉCNICAS DE DESENSAMBLE</h3>
        <div class="border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center p-8 w-full bg-white text-slate-400">
          <i data-lucide="image" class="w-8 h-8 mb-2"></i>
          <p class="text-xs font-bold text-slate-500 tracking-widest">ARRASTRA IMAGEN</p>
        </div>
      </div>
    </section>

    <!-- Reseña Histórica -->
    <section id="comunidad" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p class="text-sm font-bold text-blue-600 tracking-widest mb-2">UNIDAD EDUCATIVA ESTADAL "JORGE SEMIDEY"</p>
      <h2 class="text-4xl font-black text-slate-900 mb-8 tracking-tight">Reseña Histórica</h2>
      <div class="grid lg:grid-cols-2 gap-12">
        <div class="prose prose-lg text-slate-600">
          <h3 class="text-xl font-bold text-slate-800 mb-4">Jorge Semidey Illarramendi: Forjador de la Educación en Aragua.</h3>
          <p class="mb-4">En 1915, en la ciudad de San Cristóbal, estado Táchira, nace el destacado educador <strong>Jorge Semidey Illarramendi</strong>, figura clave dentro del desarrollo pedagógico venezolano y referente para generaciones de estudiantes y docentes. Su vocación por la enseñanza, su disciplina y su rigurosa ética profesional lo convirtieron en un referente nacional.</p>
          <p>A partir de 1948, Semidey desempeñó un papel fundamental como director y profesor del reconocido Liceo Agustín Codazzi de...</p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center p-8 aspect-square bg-slate-50 text-slate-400">
            <i data-lucide="image" class="w-8 h-8 mb-2"></i>
            <p class="text-xs font-bold text-slate-500 tracking-widest text-center">ARRASTRA IMAGEN<br/><span class="font-normal text-[10px]">FOTO HISTÓRICA</span></p>
          </div>
          <div class="border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center p-8 aspect-square bg-slate-50 text-slate-400">
            <i data-lucide="image" class="w-8 h-8 mb-2"></i>
            <p class="text-xs font-bold text-slate-500 tracking-widest text-center">ARRASTRA IMAGEN<br/><span class="font-normal text-[10px]">FOTO ACTUAL</span></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Evidencias Fase III -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <span class="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold tracking-widest mb-4">PROYECTO SOCIO-TECNOLÓGICO</span>
      <h2 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">EVIDENCIAS FASE III</h2>
      <p class="text-lg text-slate-600 mb-12 max-w-3xl mx-auto">Registro visual de las actividades de mantenimiento preventivo y correctivo realizadas en la institución.</p>
      
      <div class="grid md:grid-cols-3 gap-6">
        <div class="md:col-span-2 border-2 border-dashed border-slate-300 rounded-3xl flex flex-col items-center justify-center p-12 min-h-[400px] bg-slate-50 text-slate-400">
          <i data-lucide="video" class="w-12 h-12 mb-4"></i>
          <p class="text-sm font-bold text-slate-500 tracking-widest">ARRASTRA VIDEO</p>
        </div>
        <div class="grid grid-rows-2 gap-6">
          <div class="border-2 border-dashed border-slate-300 rounded-3xl flex flex-col items-center justify-center p-8 bg-slate-50 text-slate-400">
            <i data-lucide="image" class="w-8 h-8 mb-2"></i>
            <p class="text-xs font-bold text-slate-500 tracking-widest text-center">ARRASTRA IMAGEN<br/><span class="font-normal text-[10px]">EVIDENCIA FOTO 1</span></p>
          </div>
          <div class="border-2 border-dashed border-slate-300 rounded-3xl flex flex-col items-center justify-center p-8 bg-slate-50 text-slate-400">
            <i data-lucide="image" class="w-8 h-8 mb-2"></i>
            <p class="text-xs font-bold text-slate-500 tracking-widest text-center">ARRASTRA IMAGEN<br/><span class="font-normal text-[10px]">EVIDENCIA FOTO 2</span></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Manual Paso a Paso -->
    <section id="introduccion" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">MANUAL PASO A PASO</h2>
        <p class="text-sm font-bold text-slate-500 tracking-widest uppercase">PROTOCOLO TÉCNICO CANAIMA REALIZADO POR EL EQUIPO</p>
      </div>

      <div class="grid md:grid-cols-2 gap-6" id="paso-a-paso-container">
        <!-- Steps will be injected here -->
      </div>
    </section>

    <!-- Guía de Mantenimiento Completo -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 class="text-4xl font-black text-slate-900 mb-2 tracking-tight">GUÍA DE MANTENIMIENTO COMPLETO</h2>
      <p class="text-sm font-bold text-slate-500 tracking-widest uppercase mb-12">PROCEDIMIENTO PROFESIONAL PARA LAPTOP CANAIMA</p>
      
      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <div class="border-l-4 border-blue-600 pl-6 mb-8">
            <h3 class="text-2xl font-bold text-slate-800 mb-4">¿QUÉ ES EL MANTENIMIENTO?</h3>
            <p class="text-slate-600 leading-relaxed">El mantenimiento es un conjunto de acciones técnicas planificadas que permiten conservar equipos en un estado óptimo de funcionamiento.</p>
          </div>
          
          <h3 class="text-xl font-bold text-slate-800 mb-6 mt-12">NORMAS DE SEGURIDAD</h3>
          <ul class="space-y-4">
            <li class="flex items-center gap-4 bg-slate-50 p-4 rounded-xl">
              <span class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</span>
              <span class="text-sm font-bold text-slate-700 uppercase">TRABAJAR CON LAS MANOS LIMPIAS Y LIBRES DE GRASA.</span>
            </li>
            <li class="flex items-center gap-4 bg-slate-50 p-4 rounded-xl">
              <span class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</span>
              <span class="text-sm font-bold text-slate-700 uppercase">EVITAR USAR ROPA SUELTA O ACCESORIOS PELIGROSOS.</span>
            </li>
            <li class="flex items-center gap-4 bg-slate-50 p-4 rounded-xl">
              <span class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">3</span>
              <span class="text-sm font-bold text-slate-700 uppercase">DESCONECTAR EL EQUIPO ANTES DE ABRIRLO.</span>
            </li>
            <li class="flex items-center gap-4 bg-slate-50 p-4 rounded-xl">
              <span class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">4</span>
              <span class="text-sm font-bold text-slate-700 uppercase">UTILIZAR GUANTES ANTIESTÁTICOS OBLIGATORIAMENTE.</span>
            </li>
            <li class="flex items-center gap-4 bg-slate-50 p-4 rounded-xl">
              <span class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">5</span>
              <span class="text-sm font-bold text-slate-700 uppercase">NO FORZAR PIEZAS: CADA PARTE TIENE SU MECANISMO.</span>
            </li>
            <li class="flex items-center gap-4 bg-slate-50 p-4 rounded-xl">
              <span class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">6</span>
              <span class="text-sm font-bold text-slate-700 uppercase">UTILIZAR HERRAMIENTAS AISLADAS Y EN BUEN ESTADO.</span>
            </li>
            <li class="flex items-center gap-4 bg-slate-50 p-4 rounded-xl">
              <span class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">7</span>
              <span class="text-sm font-bold text-slate-700 uppercase">MANTENER EL ÁREA DE TRABAJO LIMPIA Y ORGANIZADA.</span>
            </li>
            <li class="flex items-center gap-4 bg-slate-50 p-4 rounded-xl">
              <span class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">8</span>
              <span class="text-sm font-bold text-slate-700 uppercase">DESCARGAR ELECTRICIDAD ESTÁTICA ANTES DE INTERVENIR.</span>
            </li>
          </ul>
        </div>
        <div class="border-2 border-dashed border-slate-300 rounded-3xl flex flex-col items-center justify-center p-12 bg-slate-50 min-h-[500px] text-slate-400">
          <i data-lucide="image" class="w-12 h-12 mb-4"></i>
          <p class="text-xs font-bold text-slate-500 tracking-widest text-center">ARRASTRA IMAGEN<br/><span class="font-normal text-[10px]">FOTO MANTENIMIENTO</span></p>
        </div>
      </div>
    </section>

    <!-- Componentes de Hardware -->
    <section id="hardware" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-slate-50 rounded-3xl my-12">
      <h2 class="text-4xl font-black text-slate-900 mb-2 tracking-tight">COMPONENTES DE HARDWARE</h2>
      <p class="text-slate-600 mb-12">Elementos físicos que conforman la estructura de la Canaima.</p>

      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-6">
          <div class="w-24 h-24 shrink-0 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center bg-slate-50 text-slate-400">
            <i data-lucide="image" class="w-6 h-6 mb-1"></i>
            <span class="text-[10px] font-bold text-slate-400 text-center">ARRASTRA<br/>IMAGEN</span>
          </div>
          <div>
            <h3 class="text-sm font-bold text-blue-600 tracking-widest mb-2">PROCESADOR</h3>
            <h4 class="text-lg font-bold text-slate-800 mb-2">INTEL ATOM N270 (1.6 GHZ)</h4>
            <p class="text-xs text-slate-600 leading-relaxed uppercase">MICROPROCESADOR DE BAJO CONSUMO DISEÑADO PARA EQUIPOS PORTÁTILES EDUCATIVOS. SU ARQUITECTURA PERMITE EJECUTAR APLICACIONES BÁSICAS, NAVEGADORES, PROGRAMAS ESCOLARES Y SISTEMAS LINUX LIVIANOS.</p>
          </div>
        </div>

        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-6">
          <div class="w-24 h-24 shrink-0 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center bg-slate-50 text-slate-400">
            <i data-lucide="image" class="w-6 h-6 mb-1"></i>
            <span class="text-[10px] font-bold text-slate-400 text-center">ARRASTRA<br/>IMAGEN</span>
          </div>
          <div>
            <h3 class="text-sm font-bold text-blue-600 tracking-widest mb-2">CHIPSET</h3>
            <h4 class="text-lg font-bold text-slate-800 mb-2">INTEL 945GSE</h4>
            <p class="text-xs text-slate-600 leading-relaxed uppercase">CONTROLADOR PRINCIPAL QUE GESTIONA LA COMUNICACIÓN ENTRE CPU, MEMORIA RAM, VIDEO INTEGRADO Y DISPOSITIVOS I/O. INCLUYE GRÁFICOS INTEGRADOS INTEL GMA 950.</p>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mt-8">
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 class="text-sm font-bold text-slate-800 mb-4 border-b pb-2">PUERTOS E INTERFACES</h3>
          <ul class="text-xs text-slate-600 space-y-2 font-medium">
            <li>• 2 PUERTOS USB (1.0 / 2.0)</li>
            <li>• 1 PUERTO VGA EXTERNO</li>
            <li>• 1 PUERTO ETHERNET RJ-45</li>
            <li>• 1 LECTOR DE TARJETAS SD</li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 class="text-sm font-bold text-slate-800 mb-4 border-b pb-2">BATERÍA Y ENERGÍA</h3>
          <ul class="text-xs text-slate-600 space-y-2 font-medium">
            <li>• ION-LITIO (2 CELDAS)</li>
            <li>• AUTONOMÍA: 2 - 2.5 HORAS</li>
            <li>• PESO: 1.6 KG (LIGERA)</li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 class="text-sm font-bold text-slate-800 mb-4 border-b pb-2">AUDIO Y MULTIMEDIA</h3>
          <ul class="text-xs text-slate-600 space-y-2 font-medium">
            <li>• ALTAVOCES INTERNOS</li>
            <li>• MICRÓFONO 3.5 MM</li>
            <li>• SALIDA AUDIO 3.5 MM</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Componentes de Software -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 class="text-4xl font-black text-slate-900 mb-2 tracking-tight">COMPONENTES DE SOFTWARE</h2>
      <p class="text-slate-600 mb-12">Programas, controladores y sistemas que permiten el funcionamiento de la Canaima.</p>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-blue-600 text-white p-8 rounded-3xl flex gap-6 items-start">
          <span class="text-4xl font-black text-blue-400 opacity-50">01</span>
          <div>
            <h3 class="text-xl font-bold mb-3">SISTEMA OPERATIVO CANAIMA GNU/LINUX</h3>
            <p class="text-xs text-blue-100 leading-relaxed uppercase">BASADO EN DEBIAN. INCLUYE HERRAMIENTAS EDUCATIVAS, APLICACIONES DE PRODUCTIVIDAD Y ENTORNOS LIVIANOS QUE OPTIMIZAN EL RENDIMIENTO DEL EQUIPO.</p>
          </div>
        </div>
        <div class="bg-blue-600 text-white p-8 rounded-3xl flex gap-6 items-start">
          <span class="text-4xl font-black text-blue-400 opacity-50">02</span>
          <div>
            <h3 class="text-xl font-bold mb-3">CONTROLADORES DRIVERS DEL SISTEMA</h3>
            <p class="text-xs text-blue-100 leading-relaxed uppercase">INCLUYEN DRIVERS PARA WI-FI, GRÁFICOS INTEL, AUDIO, CÁMARA WEB Y PUERTOS INTERNOS. ESENCIALES PARA RECONOCER EL HARDWARE.</p>
          </div>
        </div>
        <div class="bg-blue-600 text-white p-8 rounded-3xl flex gap-6 items-start">
          <span class="text-4xl font-black text-blue-400 opacity-50">03</span>
          <div>
            <h3 class="text-xl font-bold mb-3">APLICACIONES SOFTWARE EDUCATIVO</h3>
            <p class="text-xs text-blue-100 leading-relaxed uppercase">PROGRAMAS PREINSTALADOS PARA LECTURA, MATEMÁTICA, ACTIVIDADES INTERACTIVAS, NAVEGACIÓN Y ESCRITURA.</p>
          </div>
        </div>
        <div class="bg-blue-600 text-white p-8 rounded-3xl flex gap-6 items-start">
          <span class="text-4xl font-black text-blue-400 opacity-50">04</span>
          <div>
            <h3 class="text-xl font-bold mb-3">FIRMWARE BIOS</h3>
            <p class="text-xs text-blue-100 leading-relaxed uppercase">PERMITE LA COMUNICACIÓN ENTRE HARDWARE Y SOFTWARE. CONTROLA EL ARRANQUE DEL SISTEMA Y LA CONFIGURACIÓN PRIMARIA DEL EQUIPO.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Fichas Técnicas -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 class="text-4xl font-black text-slate-900 mb-2 tracking-tight">FICHAS TÉCNICAS DE EQUIPOS</h2>
      <p class="text-slate-600 mb-12">Registro detallado de las especificaciones técnicas de los equipos de la institución.</p>

      <div class="flex flex-wrap gap-4" id="fichas-container">
        <!-- Fichas will be generated by JS -->
      </div>
    </section>

    <!-- Soberanía Tecnológica -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="bg-slate-900 rounded-3xl p-12 lg:p-20 text-center text-white relative overflow-hidden">
        <div class="relative z-10">
          <h2 class="text-5xl lg:text-7xl font-black mb-6 tracking-tighter">SOBERANÍA<br/>TECNOLÓGICA</h2>
          <p class="text-lg lg:text-xl font-medium text-slate-300 max-w-3xl mx-auto uppercase tracking-wide">CADA COMPONENTE HA SIDO INTEGRADO PARA GARANTIZAR EL LIBRE ACCESO A LA EDUCACIÓN MEDIANTE SOFTWARE LIBRE Y HARDWARE REPARABLE.</p>
        </div>
      </div>
    </section>

    <!-- Hardware y Software Header -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h2 class="text-6xl lg:text-8xl font-black text-slate-900 mb-4 tracking-tighter">HARDWARE<br/>Y SOFTWARE.</h2>
      <p class="text-xl font-bold text-slate-500 tracking-widest uppercase">ESPECIFICACIONES TÉCNICAS DETALLADAS.</p>
    </section>

    <!-- Kit de Herramientas -->
    <section id="herramientas" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-slate-900 pb-6">
        <h2 class="text-5xl font-black text-slate-900 tracking-tighter">KIT DE<br/>HERRAMIENTAS.</h2>
        <div class="relative mt-6 md:mt-0">
          <select class="appearance-none bg-white border-2 border-slate-200 rounded-xl px-6 py-3 pr-12 font-bold text-slate-700 focus:outline-none focus:border-blue-600 cursor-pointer">
            <option>SELECCIONAR CATEGORÍA</option>
            <option>1. HERRAMIENTAS PARA CORTAR Y SUJETAR</option>
            <option>2. HERRAMIENTAS PARA ATORNILLAR</option>
            <option>3. CORTE, APERTURA Y MANIPULACIÓN FINA</option>
            <option>4. HERRAMIENTAS PARA SOLDAR</option>
            <option>5. HERRAMIENTAS PARA CABLES Y CONECTORES</option>
            <option>7. PRUEBA Y DIAGNÓSTICO</option>
            <option>8. EQUIPOS AUXILIARES</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
            <i data-lucide="chevron-down" class="w-4 h-4"></i>
          </div>
        </div>
      </div>

      <div id="herramientas-container" class="space-y-16">
        <!-- Herramientas will be injected here -->
      </div>
    </section>

    <!-- Glosario Técnico -->
    <section id="glosario" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 class="text-4xl font-black text-slate-900 mb-2 tracking-tight">GLOSARIO TÉCNICO</h2>
      <p class="text-slate-600 mb-12 uppercase font-bold tracking-widest text-sm">ENCICLOPEDIA DE SOPORTE CANAIMA.</p>
      
      <div class="flex flex-wrap gap-2 mb-8" id="glosario-letters">
        <!-- Letters will be injected here -->
      </div>
      
      <div class="relative mb-12">
        <input type="text" id="glosario-search" placeholder="Escriba aquí para buscar un término..." class="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-6 py-4 pl-14 font-medium text-slate-700 focus:outline-none focus:border-blue-600 transition-colors" />
        <i data-lucide="search" class="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5"></i>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="glosario-container">
        <!-- Terms will be injected here -->
      </div>
    </section>

    <!-- Integrantes del Proyecto -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h2 class="text-4xl font-black text-slate-900 mb-12 tracking-tight">INTEGRANTES DEL PROYECTO</h2>
      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <div class="flex flex-col items-center">
          <div class="w-32 h-32 border-2 border-dashed border-slate-300 rounded-full flex items-center justify-center bg-slate-50 text-slate-400 mb-4">
            <i data-lucide="image" class="w-8 h-8"></i>
          </div>
          <h3 class="font-bold text-lg text-slate-800">VICTOR ALVAREZ</h3>
          <p class="text-sm text-slate-500 font-medium">C.I. 30.071.673</p>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-32 h-32 border-2 border-dashed border-slate-300 rounded-full flex items-center justify-center bg-slate-50 text-slate-400 mb-4">
            <i data-lucide="image" class="w-8 h-8"></i>
          </div>
          <h3 class="font-bold text-lg text-slate-800">JUAN GUDIÑO</h3>
          <p class="text-sm text-slate-500 font-medium">C.I. 32.010.728</p>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-32 h-32 border-2 border-dashed border-slate-300 rounded-full flex items-center justify-center bg-slate-50 text-slate-400 mb-4">
            <i data-lucide="image" class="w-8 h-8"></i>
          </div>
          <h3 class="font-bold text-lg text-slate-800">ENDRY CARRILLO</h3>
          <p class="text-sm text-slate-500 font-medium">C.I. 31.082.361</p>
        </div>
      </div>
      <p class="text-sm font-bold text-slate-500 tracking-widest uppercase mb-2">TRAYECTO 1 SECCIÓN 5</p>
      <p class="text-sm font-bold text-slate-500 tracking-widest uppercase">UPT ARAGUA - PNF INFORMÁTICA - MARACAY 2025</p>
    </section>

    <!-- Autoría y Créditos -->
    <section id="creditos" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 class="text-5xl lg:text-7xl font-black text-blue-900 mb-4 tracking-tighter">AUTORÍA Y<br/>CRÉDITOS.</h2>
      <p class="text-sm font-bold text-slate-500 tracking-widest uppercase mb-16">RECONOCIMIENTO ACADÉMICO E INSTITUCIONAL.</p>
      
      <div class="grid lg:grid-cols-2 gap-16">
        <div>
          <h3 class="text-2xl font-black text-slate-800 mb-6 border-l-4 border-blue-600 pl-4">AGRADECIMIENTOS</h3>
          <div class="prose prose-lg text-slate-600">
            <p>Agradecemos enormemente a Dios por llevarnos por el camino del bien y lograr nuestros sueños de graduarnos con todo lo que nos proponemos en este futuro.</p>
            <p>También agradecemos a las personas más valiosas de nuestras vidas, que son nuestros padres y maestros, quienes nos han ayudado y apoyado en todo momento, moral y emocionalmente a cada uno de nosotros, y por darnos la oportunidad de vivir y conocer nuevas etapas inolvidables para todos nosotros como el grupo de informática, trayecto 1, sección 5.</p>
          </div>
        </div>
        <div>
          <h3 class="text-2xl font-black text-slate-800 mb-6 border-l-4 border-blue-600 pl-4">MENCIONES ESPECIALES</h3>
          <div class="space-y-8">
            <div>
              <p class="text-xs font-bold text-slate-500 tracking-widest uppercase mb-1">PROFESORA DE PROYECTO</p>
              <h4 class="text-lg font-bold text-slate-800 mb-2">PROF. ELIZABETH DUARTE</h4>
              <p class="text-slate-600 italic">"Por su guía y apoyo constante en la realización de este manual."</p>
            </div>
            <div>
              <p class="text-xs font-bold text-slate-500 tracking-widest uppercase mb-1">PROFESOR TUTOR</p>
              <h4 class="text-lg font-bold text-slate-800 mb-2">PROF. VICENTE CIFUENTES</h4>
              <p class="text-slate-600 italic">"Por su ayuda invaluable con las correcciones técnicas del proyecto."</p>
            </div>
            <div>
              <p class="text-xs font-bold text-slate-500 tracking-widest uppercase mb-1">HERRAMIENTAS Y ESTRUCTURA</p>
              <h4 class="text-lg font-bold text-slate-800 mb-2">PROF. ANYER MARTÍNEZ Y KERVIN LICETT</h4>
              <p class="text-slate-600 italic">"Por enseñarnos las herramientas a usar y la estructura del manual."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Modal Ficha Técnica -->
  <div id="ficha-modal" class="fixed inset-0 bg-slate-900/50 z-[100] hidden items-center justify-center p-4">
    <div class="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
      <div class="sticky top-0 bg-white border-b border-slate-200 p-4 flex justify-between items-center z-10">
        <h3 class="text-xl font-bold text-slate-800" id="modal-title">FICHA TÉCNICA</h3>
        <button id="close-modal" class="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors">
          <i data-lucide="x"></i>
        </button>
      </div>
      <div class="p-6" id="modal-content">
        <!-- Modal content injected via JS -->
      </div>
    </div>
  </div>
`;

document.getElementById('app-content').innerHTML = htmlContent;

// Initialize Lucide icons
createIcons({ icons });

// Data for dynamic sections
const pasos = [
  { num: '01', title: 'PREPARACIÓN DEL ÁREA DE TRABAJO', desc: 'ASEGÚRATE DE TRABAJAR SOBRE UNA MESA FIRME, LIMPIA Y LIBRE DE HUMEDAD. TEN A MANO TODAS LAS HERRAMIENTAS NECESARIAS.' },
  { num: '02', title: 'APAGAR Y DESCONECTAR LA LAPTOP', desc: 'LA LAPTOP DEBE ESTAR COMPLETAMENTE APAGADA, DESCONECTADA DEL CARGADOR Y SIN DISPOSITIVOS EXTERNOS.', sub: 'Drena la energía residual manteniendo el botón de encendido presionado por 10 segundos tras desconectar todo.' },
  { num: '03', title: 'RETIRAR LA BATERÍA', desc: 'EN LOS MODELOS CANAIMA DESMONTABLES, LIBERA EL SEGURO Y EXTRAE LA BATERÍA PARA EVITAR RIESGOS ELÉCTRICOS.', sub: 'Paso crítico de seguridad para evitar cortocircuitos accidentales en la placa base.' },
  { num: '04', title: 'ABRIR LA CARCASA', desc: 'UTILIZA UN DESTORNILLADOR ADECUADO PARA RETIRAR LOS TORNILLOS DEL CHASIS Y ACCEDE A LOS COMPONENTES INTERNOS.', sub: 'Retira todos los tornillos del panel inferior. Ten especial cuidado con los componentes sensibles.' },
  { num: '05', title: 'LIMPIEZA INTERNA GENERAL', desc: 'USA AIRE COMPRIMIDO PARA REMOVER EL POLVO ACUMULADO EN EL VENTILADOR Y LAS ZONAS DE DIFÍCIL ACCESO.', sub: 'La acumulación de polvo es la principal causa de sobrecalentamiento.' },
  { num: '06', title: 'VERIFICAR ESTADO DE COMPONENTES', desc: 'OBSERVAR DETENIDAMENTE EL ESTADO DE LA PLACA MADRE EN BUSCA DE ANOMALÍAS.', sub: 'Busca signos de corrosión, componentes quemados o pasta térmica seca.' },
  { num: '07', title: 'CAMBIO DE PASTA TÉRMICA', desc: 'APLICA UNA PEQUEÑA CANTIDAD DE PASTA TÉRMICA NUEVA SOBRE EL PROCESADOR.', sub: 'Limpia la superficie con alcohol isopropílico antes de aplicar la nueva capa.' },
  { num: '08', title: 'LIMPIEZA DEL TECLADO Y PANTALLA', desc: 'UTILIZA UNA BROCHA DE CERDAS SUAVES PARA REMOVER RESIDUOS ENTRE LAS TECLAS.', sub: 'La limpieza externa previene fallos mecánicos en las teclas.' },
  { num: '09', title: 'ENSAMBLAJE FINAL', desc: 'VUELVE A COLOCAR LOS COMPONENTES INTERNOS Y ASEGURA TODOS LOS TORNILLOS.' },
  { num: '010', title: 'PRUEBAS DE FUNCIONAMIENTO', desc: 'ENCIENDE LA LAPTOP Y VERIFICA QUE EL SISTEMA OPERATIVO INICIE CORRECTAMENTE.', sub: 'Comprueba el teclado, el sonido y la carga de la batería.' }
];

const fichas = [
  { num: '01', equipo: '00089040' },
  { num: '02', equipo: '00093064' },
  { num: '03', equipo: '00089239' },
  { num: '04', equipo: '00088965' },
  { num: '05', equipo: '00093089' }
];

const herramientas = [
  {
    cat: '1. HERRAMIENTAS PARA CORTAR Y SUJETAR',
    items: ['PINZAS DE CORTE<br/>(ALICATES DE CORTE)', 'MINI ALICATE DE<br/>PUNTA']
  },
  {
    cat: '2. HERRAMIENTAS PARA ATORNILLAR',
    items: ['DESTORNILLADOR DE<br/>TRINQUETE', 'PUNTAS<br/>INTERCAMBIABLES', 'DESTORNILLADORES<br/>DE PRECISIÓN', 'DESTORNILLADORES<br/>GRANDES']
  },
  {
    cat: '4. HERRAMIENTAS PARA SOLDAR',
    items: ['SOLDADOR<br/>ELÉCTRICO', 'ROLLO DE<br/>ESTAÑO', 'BOMBA<br/>DESOLDADORA', 'JERINGA DE<br/>FLUX']
  },
  {
    cat: '5. HERRAMIENTAS PARA CABLES Y CONECTORES',
    items: ['CRIMPEADORA /<br/>PELACABLES', 'PONCHADORA<br/>RJ45/RJ11']
  },
  {
    cat: '8. EQUIPOS AUXILIARES',
    items: ['SOPLADORA', 'PULSERA<br/>ANTIESTÁTICA']
  }
];

const glosario = [
  { term: 'CPU', def: 'Central Processing Unit. El cerebro del computador que procesa todas las instrucciones.' },
  { term: 'DDR2', def: 'Double Data Rate 2. Estándar de memoria RAM utilizado en las arquitecturas Canaima.' },
  { term: 'DEBIAN', def: 'Sistema operativo libre y universal, base sólida sobre la cual se construye Canaima GNU/Linux.' },
  { term: 'DIAGNÓSTICO', def: 'Proceso de análisis para identificar la naturaleza y causa de un fallo en el sistema.' },
  { term: 'DISIPADOR', def: 'Estructura metálica (aluminio/cobre) diseñada para evacuar el calor del procesador.' },
  { term: 'DRIVER', def: 'Controlador. Software que permite al sistema operativo interactuar con un hardware específico.' },
  { term: 'LED', def: 'Diodo Emisor de Luz. Usado frecuentemente como indicador de estado en equipos.' },
  { term: 'LINUX', def: 'Núcleo (kernel) de sistema operativo libre tipo Unix. Corazón de Canaima.' },
  { term: 'MALWARE', def: 'Software malicioso (virus, troyanos) diseñado para infiltrarse o dañar una computadora.' },
  { term: 'MOTHERBOARD', def: 'Tarjeta madre. Placa principal que interconecta todos los componentes del sistema.' },
  { term: 'NORTHBRIDGE', def: 'Puente Norte. Chip encargado de gestionar el tráfico de alta velocidad (RAM, Video).' },
  { term: 'NÚCLEO (CORE)', def: 'Unidad de procesamiento independiente dentro de una CPU moderna.' },
  { term: 'OHM', def: 'Unidad de medida de la resistencia eléctrica.' },
  { term: 'PARTICIÓN', def: 'División lógica de una unidad de almacenamiento que funciona como una unidad independiente.' },
  { term: 'PASTA TÉRMICA', def: 'Compuesto que mejora la conducción de calor entre el procesador y el disipador.' },
  { term: 'SOUTHBRIDGE', def: 'Puente Sur. Chipset que gestiona periféricos más lentos (USB, Audio, BIOS).' },
  { term: 'SSD', def: 'Solid State Drive. Unidad de estado sólido. Almacenamiento rápido basado en chips.' },
  { term: 'SWAP', def: 'Espacio de intercambio en disco utilizado como extensión de la memoria RAM.' },
  { term: 'TERMINAL', def: 'Interfaz de línea de comandos para interactuar directamente con el sistema operativo.' },
  { term: 'USB', def: 'Universal Serial Bus. Estándar industrial para la conexión de periféricos y alimentación.' },
  { term: 'VGA', def: 'Video Graphics Array. Estándar analógico de visualización gráfica.' },
  { term: 'VOLTAJE', def: 'Potencial eléctrico, expresado en voltios. Fuerza que impulsa los electrones.' },
  { term: 'WATT', def: 'Vatio. Unidad de potencia eléctrica producida o consumida.' }
];

// Inject Pasos
const pasosContainer = document.getElementById('paso-a-paso-container');
pasos.forEach(p => {
  pasosContainer.innerHTML += `
    <div class="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
      <div class="flex items-start gap-4">
        <span class="text-4xl font-black text-blue-100">${p.num}</span>
        <div>
          <h3 class="text-xl font-bold text-slate-800 mb-3 tracking-tight">${p.title}</h3>
          <p class="text-sm text-slate-600 leading-relaxed uppercase">${p.desc}</p>
          ${p.sub ? `<p class="text-xs text-slate-500 mt-2">${p.sub}</p>` : ''}
        </div>
      </div>
    </div>
  `;
});

// Inject Fichas
const fichasContainer = document.getElementById('fichas-container');
fichas.forEach(f => {
  fichasContainer.innerHTML += `
    <div class="bg-white border border-slate-200 rounded-2xl p-6 flex-1 min-w-[200px] shadow-sm hover:shadow-md transition-shadow text-center">
      <p class="text-xs font-bold text-slate-500 tracking-widest mb-2">FICHA Nº ${f.num}</p>
      <h3 class="text-xl font-black text-slate-800 mb-4">EQUIPO<br/>${f.equipo}</h3>
      <button class="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors open-modal-btn" data-ficha="${f.num}" data-equipo="${f.equipo}">VER DETALLES &rarr;</button>
    </div>
  `;
});

// Inject Herramientas
const herrContainer = document.getElementById('herramientas-container');
herramientas.forEach(h => {
  let itemsHtml = h.items.map(item => `
    <div class="text-center">
      <div class="aspect-square border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center bg-slate-50 text-slate-400 mb-4">
        <i data-lucide="image" class="w-8 h-8"></i>
      </div>
      <h4 class="font-bold text-sm text-slate-800 uppercase">${item}</h4>
    </div>
  `).join('');

  herrContainer.innerHTML += `
    <div>
      <h3 class="text-2xl font-black text-slate-800 mb-8 tracking-tight">${h.cat}</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        ${itemsHtml}
      </div>
    </div>
  `;
});

// Inject Glosario
const glosarioContainer = document.getElementById('glosario-container');
const renderGlosario = (terms) => {
  glosarioContainer.innerHTML = terms.map(t => `
    <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <h3 class="text-lg font-black text-blue-900 mb-2">${t.term}</h3>
      <p class="text-sm text-slate-600 leading-relaxed">${t.def}</p>
    </div>
  `).join('');
};
renderGlosario(glosario);

// Glosario Letters
const lettersContainer = document.getElementById('glosario-letters');
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
lettersContainer.innerHTML = `<button class="px-3 py-1 rounded-lg text-sm font-bold bg-blue-600 text-white letter-btn" data-letter="ALL">VER TODO</button>`;
alphabet.forEach(l => {
  lettersContainer.innerHTML += `<button class="px-3 py-1 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-100 letter-btn" data-letter="${l}">${l}</button>`;
});

// Re-initialize icons for newly injected content
createIcons({ icons });

// Interactions
document.querySelectorAll('.letter-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.letter-btn').forEach(b => {
      b.classList.remove('bg-blue-600', 'text-white');
      b.classList.add('text-slate-600');
    });
    e.target.classList.remove('text-slate-600');
    e.target.classList.add('bg-blue-600', 'text-white');
    
    const letter = e.target.getAttribute('data-letter');
    if (letter === 'ALL') {
      renderGlosario(glosario);
    } else {
      renderGlosario(glosario.filter(t => t.term.startsWith(letter)));
    }
  });
});

document.getElementById('glosario-search').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  renderGlosario(glosario.filter(t => t.term.toLowerCase().includes(query) || t.def.toLowerCase().includes(query)));
});

// Modal Logic
const modal = document.getElementById('ficha-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');

document.querySelectorAll('.open-modal-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const num = e.target.getAttribute('data-ficha');
    const equipo = e.target.getAttribute('data-equipo');
    
    modalTitle.innerText = `FICHA TÉCNICA Nº ${num}`;
    modalContent.innerHTML = `
      <div class="space-y-6">
        <div class="grid grid-cols-2 gap-4 text-sm">
          <div><span class="font-bold text-slate-500">NOMBRE DE LA INSTITUCIÓN:</span><br/>Unidad Educativa Estadal "JORGE SEMIDEY"</div>
          <div><span class="font-bold text-slate-500">DIRECCIÓN:</span><br/>Calle Los Próceres del sector Francisco de Miranda. Maracay Edo. Aragua</div>
          <div><span class="font-bold text-slate-500">TELF:</span><br/>0424-3256374</div>
          <div><span class="font-bold text-slate-500">TIPO DE COMPUTADOR:</span><br/>LAPTOP: [X]</div>
          <div><span class="font-bold text-slate-500">Nº DE FICHA:</span> ${num}</div>
          <div><span class="font-bold text-slate-500">Nº DE EQUIPO:</span> ${equipo}</div>
        </div>
        
        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm border-collapse">
            <thead>
              <tr class="bg-slate-100 text-slate-600">
                <th class="p-3 border border-slate-200">HARDWARE</th>
                <th class="p-3 border border-slate-200">MARCA</th>
                <th class="p-3 border border-slate-200">MODELO</th>
                <th class="p-3 border border-slate-200">REF/CÓDIGO/SERIAL</th>
                <th class="p-3 border border-slate-200">CAPACIDAD VELOCIDAD</th>
                <th class="p-3 border border-slate-200">ESTADO (M-R-B)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border border-slate-200 font-bold">MEMORIA RAM 1</td>
                <td class="p-3 border border-slate-200">OEM USI</td>
                <td class="p-3 border border-slate-200">64M8X8</td>
                <td class="p-3 border border-slate-200">S8D2J165278281265</td>
                <td class="p-3 border border-slate-200">1 GB 667 MHz</td>
                <td class="p-3 border border-slate-200 text-green-600 font-bold">Bueno</td>
              </tr>
              <tr>
                <td class="p-3 border border-slate-200 font-bold">DISCO DURO 1</td>
                <td class="p-3 border border-slate-200">SAMSUNG</td>
                <td class="p-3 border border-slate-200">HS040HB</td>
                <td class="p-3 border border-slate-200">S0UAJ10S310110</td>
                <td class="p-3 border border-slate-200">40GB HDD</td>
                <td class="p-3 border border-slate-200 text-green-600 font-bold">Bueno</td>
              </tr>
              <tr>
                <td class="p-3 border border-slate-200 font-bold">PROCESADOR</td>
                <td class="p-3 border border-slate-200">Intel</td>
                <td class="p-3 border border-slate-200">Atom</td>
                <td class="p-3 border border-slate-200">N270</td>
                <td class="p-3 border border-slate-200">1600MHz</td>
                <td class="p-3 border border-slate-200 text-green-600 font-bold">Bueno</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    createIcons({ icons });
  });
});

document.getElementById('close-modal').addEventListener('click', () => {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
});

// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
