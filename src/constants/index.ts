import {
    logoNegativo,
    logoPositivo,
    python,
    java,
    mobile,
    backend,
    creator,
    web,
    ai,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    carrent,
    autofillai,
    jobit,
    tripguide,
    calicer,
    cardioins,
    gina,
    alejandro,
    sebastian
} from "../assets";

export const navLinks = [
    {
        id: "acerca",
        title: "Acerca de",
    },
    {
        id: "trabajo",
        title: "Trabajo",
    },
    {
        id: "contacto",
        title: "Contacto",
    }
];

const services = [
    {
        title: "Desarrollador Web",
        icon: web,
    },
    {
        title: "Integración de inteligencia artificial",
        icon: ai,
    },
    {
        title: "Desarrollador BackEnd",
        icon: mobile,
    },
    {
        title: "Desarrollador FrontEnd",
        icon: backend,
    },
    {
        title: "Diseñador de Interfaces",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "java",
        icon: java,
    },
    {
        name: "python",
        icon: python,
    },
];

const experiences = [
    {
        title: "Desarrollador FullStack",
        company_name: "Training and Educational Services Consultancy Group S. L.",
        icon: logoNegativo,
        iconBg: "#383E56",
        date: "Agosto 2024 - Enero 2025",
        points: [
            "Desarrollé una aplicación con inteligencia artificial integrada que llenaba formularios automáticamente a partir de documentos PDF.",
            "Creé un panel de administración para gestionar los datos extraídos y su edición antes de generar el PDF final.",
            "Implementé un editor de texto personalizado donde los usuarios podían modificar los datos antes de su envío.",
            "Desarrollé el sistema utilizando Electron, NestJS, React, Llama 3 (IA), MySQL y Docker.",
        ],
    },
    {
        title: "Desarrollador FullStack",
        company_name: "CALICER",
        icon: logoPositivo,
        iconBg: "#E6DEDD",
        date: "Mayo 2024 - Agosto 2024",
        points: [
            "Implementé mejoras en el sistema de administración de hoteles, permitiendo reservas y pagos en línea.",
            "Desarrollé funcionalidades para el panel administrativo, facilitando la gestión de reservas y exportación de facturas.",
            "Trabajé con Laravel, PHP, JavaScript, MySQL y Bootstrap para el desarrollo del backend y frontend.",
        ],
    },
    {
        title: "Desarrollador FullStack",
        company_name: "Autoescuela Rondasur",
        icon: logoNegativo,
        iconBg: "#383E56",
        date: "Junio 2024",
        points: [
            "Configuré y desplegué una plataforma de aprendizaje en Moodle en un VPS de Ionos.",
            "Migré la base de datos existente desde otro servidor y configuré el dominio de la plataforma.",
            "Realicé ajustes y personalización de la plataforma para adaptarla a las necesidades de la empresa.",
        ],
    },
    {
        title: "Desarrollador FullStack",
        company_name: "Freelancer - Autónomo",
        icon: logoNegativo,
        iconBg: "#383E56",
        date: "Febrero 2024",
        points: [
            "Diseñé una aplicación Web relacionada con el manejo de expedientes de justicia",
            "El proyecto contenía varios módulos en los cuales se podian gestionar diferentes tipos de expedientes incluyendo sus respectivos documentos.",
            "Trabajé con Laravel, PHP, JavaScript, MySQL y Bootstrap para el desarrollo del backend y frontend.",
            
        ],
    },
    {
        title: "Desarrollador FullStack",
        company_name: "FUTUROTEL GROUP (Neofranquicias)",
        icon: logoNegativo,
        iconBg: "#383E56",
        date: "Enero 2024 - Mayo 2024",
        points: [
            "Implementé mejoras en el sistema de administración de hoteles, permitiendo reservas y pagos en línea.",
            "Desarrollé funcionalidades para el panel administrativo, facilitando la gestión de reservas y exportación de facturas.",
            "Trabajé con Laravel, PHP, JavaScript, MySQL y Bootstrap para el desarrollo del backend y frontend.",
            "Optimicé el rendimiento y la seguridad del sistema a través de mejoras en la arquitectura del software.",
            
        ],
    },
    {
        title: "Desarrollador FullStack",
        company_name: "WEEX CAPITAL",
        icon: logoPositivo,
        iconBg: "#E6DEDD",
        date: "Mayo 2023 - Diciembre 2023",
        points: [
            "Desarrollé un módulo para la administración de movimientos de cajeros de criptomonedas en toda España.",
            "Implementé gráficos y métricas para visualizar los movimientos en tiempo real.",
            "Administré y optimicé páginas web mejorando el SEO y el rendimiento en Google.",
            "Trabajé con PHP, JavaScript, Bootstrap, MySQL y servidores Linux para la gestión de la infraestructura del sistema.",
        ],
    },
    
    {
        title: "Desarrollador FullStack",
        company_name: "Freelancer - Autónomo",
        icon: logoPositivo,
        iconBg: "#E6DEDD",
        date: "Enero 2023 - Febrero 2023",
        points: [
            "Desarrollé una aplicación web para administrar un restaurante o bar.",
            "La aplicación se encargaba principalmente de que el cliente desde la mesa realizaba el pedido, el pedido le llegaba a la cocina y una vez hecho el pago, la comida se le traia a la mesa al cliente.",
        ],
    },
    {
        title: "Desarrollador FullStack",
        company_name: "Freelancer - Autónomo",
        icon: logoPositivo,
        iconBg: "#E6DEDD",
        date: "OCtubre 2022 - Diciembre 2022",
        points: [
            "Desarrollé una plataforma web para administrar citas de una veterinaria",
            "La plataforma se encargaba de agendar citas, modificarlas o eliminarlas, permitiendo tener un control de pacientes.",
        ],
    },
    {
        title: "Desarrollador FullStack",
        company_name: "Freelancer - Autónomo",
        icon: logoPositivo,
        iconBg: "#E6DEDD",
        date: "Agosto 2022 - Octubre 2022",
        points: [
            "Desarrollé un sistema en el cual se podian ver o consultar el costo/beneficio de las criptomonedas en tiempo real.",
            "Realicé integraciones con APIs externas para pagos en criptomonedas y servicios financieros.",
        ],
    },
    {
        title: "Desarrollador FullStack",
        company_name: "Freelancer - Autónomo",
        icon: logoPositivo,
        iconBg: "#E6DEDD",
        date: "Marzo 2022 - Junio 2022",
        points: [
            "Desarrollé un sistema de presupuestos y cotizaciones de automóviles dependiento del modulo y marca",
            "Implementé sistemas de autenticación y gestión de usuarios con JWT y OAuth.",
        ],
    },
];


const testimonials = [
    {
        testimonial:
            "Sus labores fueron polifuncionales dando respuesta a cada requerimiento en nuestra empresa.",
        name: "Gina Salazar",
        designation: "Coordinadora Administrativa",
        company: "Uno27",
        image: gina,
    },
    {
        testimonial:
            "Su capacidad para dar atención a cada usuario fue magnífica, ayudo a dar agilidad a cada trámite.",
        name: "Alejandro Ramirez",
        designation: "Personero Municipal",
        company: "la Alcaldia",
        image: alejandro
    },
    {
        testimonial:
            "Demostró su agilidad en el aprendizaje de cada tarea que le fue encomendada y la realizó de la mejor forma",
        name: "Sebastián Delgado",
        designation: "Jefe en Sitemas",
        company: "Cinde",
        image: sebastian
    },
];

const projects = [
    {
        name: "AutoFillAI",
        description:
            "Es una aplicación con inteligencia artificial integrada, se encarga de completar campos en formularios de forma automática.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "nestjs",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "AI",
                color: "blue-text-gradient",
            },
        ],
        image: autofillai,
        source_code_link: "https://github.com/CrisAlejo26/cotizador-criptomonedas",
    },
    {
        name: "CardioIns",
        description:
            "Es una aplicación dedicada a la administración de diferentes cursos de primeros auxilios, tambien contiene módulos de facturación, pagos e integración con google calendar.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "nestjs",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "AI",
                color: "blue-text-gradient",
            },
        ],
        image: cardioins,
        source_code_link: "https://github.com/CrisAlejo26/cotizador-criptomonedas",
    },
    {
        name: "Calicer",
        description:
            "Es una aplicación de auditorias, la cual administra los pasos de una auditoria y otorga tanto al auditor como a los usuarios una interfaz en donde se pueden informar de los requerimientos, resultados y el proceso.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "custom hook",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "api",
                color: "blue-text-gradient",
            },
        ],
        image: calicer,
        source_code_link: "https://github.com/CrisAlejo26/cotizador-criptomonedas",
    },
    {
        name: "Cotizador Criptomonedas",
        description:
            "Es un cotizador de criptomonedas que da un resultado dependiendo de la moneda y lugar.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "custom hook",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "api",
                color: "blue-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/CrisAlejo26/cotizador-criptomonedas",
    },
    {
        name: "Administrador de Veterinaria",
        description:
            "Aplicación Web diseñada para el manejo de citas dentro del establecimiento, tuvo como objetivo dar un orden y agendamiento de citas a cada paciente.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "useState",
                color: "green-text-gradient",
            },
            {
                name: "useEffect",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/CrisAlejo26/Citas-Veterinaria",
    },
    {
        name: "Cotizador de Autos",
        description:
            "Este proyecto ha sido diseñado para cotizar un vehiculo dependiendo de su modelo y marca, para darle facilidad a cada cliente en conocer el valor actual de su automovil.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind css",
                color: "green-text-gradient",
            },
            {
                name: "context",
                color: "pink-text-gradient",
            },
            {
                name: "custom hook",
                color: "blue-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/CrisAlejo26/cotizador_autos",
    },
];

export { services, technologies, experiences, testimonials, projects };