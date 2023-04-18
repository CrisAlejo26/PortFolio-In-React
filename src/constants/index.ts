import {
    logoNegativo,
    logoPositivo,
    python,
    java,
    mobile,
    backend,
    creator,
    web,
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
    jobit,
    tripguide,
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
        title: "Desarrollador FrontEnd",
        company_name: "Cristian.code",
        icon: logoNegativo,
        iconBg: "#383E56",
        date: "Enero 2023 - Presente",
        points: [
            "Crear componentes en React para la vista de la página.",
            "Configurar Redux como centro principal para el manejo de estados globales en toda la aplicación.",
            "Plantear un diseño de interfaz acorde a las necesidades del sistema y dar estilos con Sass, generando variables reutilizables y usando librerias como Material UI.",
            "Usar los hooks useState y useEffect para dar un uso eficiente a cada estado o variable.",
        ],
    },
    {
        title: "Desarrollador FrontEnd",
        company_name: "Cristian.code",
        icon: logoPositivo,
        iconBg: "#E6DEDD",
        date: "Octubre 2022 - Diciembre 2022",
        points: [
            "Desarrollar componentes en React para una administrador de veterinaria.",
            "Usar useContext para darle un orden al manejo de estados de la aplicación.",
            "Implementar funcionalizades que permitan eliminar, actualizar o crear una nueva cita para la veterinaria.",
            "Mostrar elementos o componentes dependiendo de las opciones que elija el administrador.",
        ],
    },
    {
        title: "Desarrollador FrontEnd",
        company_name: "Cristian.code",
        icon: logoNegativo,
        iconBg: "#383E56",
        date: "Agosto 2022 - Octubre 2022",
        points: [
            "Diseñar una interfaz de consulta.",
            "Crear componentes de React para la vista de la pagina.",
            "Usar custom hooks para validar los formularios.",
            "Mostrar elementos o componentes dependiendo de las opciones que elija el administrador.",
            "Consultar una Api.",
        ],
    },
    {
        title: "Desarrollador FrontEnd",
        company_name: "Cristian.code",
        icon: logoPositivo,
        iconBg: "#E6DEDD",
        date: "Junio 2022 - Agosto 2022",
        points: [
            "Crear interfaz de inicio para un generador de presupuestos.",
            "Programar validaciones para evitar datos nulos o undefined.",
            "Programar la pagina para que sea responsive.",
            "Crear componentes dinamicos en React.",
        ],
    },
    {
        title: "Desarrollador FullStack",
        company_name: "Cristian.code",
        icon: logoNegativo,
        iconBg: "#383E56",
        date: "Marzo 2022 - Junio 2022",
        points: [
            "Crear interfaces para la vista del comprador de la página.",
            "Usar bootstrap para darle estilos rapidamente a cada una de las vistas.",
            "Crear conexión entre Node.js y MongoDB para mantener los datos.",
            "Usar Express para la creación de las Apis de consulta.",
            "Trabajo en equipo junto con los otros desarrolladores."
        ],
    }
];

const testimonials = [
    {
        testimonial:
            "Sus labores fueron polifuncionales dando respuesta a cada requerimiento en nuestra empresa.",
        name: "Gina Salazar",
        designation: "Coordinadora Administrativa",
        company: "Uno27",
        image: "https://scontent.frmu1-1.fna.fbcdn.net/v/t1.6435-9/117785827_10157568962161724_3870389512257947857_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rA4gY7xYMY4AX9iYDSQ&_nc_ht=scontent.frmu1-1.fna&oh=00_AfCSDtAM3ajSPbKGyVIp1J9MIfoRzkP6JuTnOPEO_8g21Q&oe=6465E895",
    },
    {
        testimonial:
            "Su capacidad para dar atención a cada usuario fue magnífica, ayudo a dar agilidad a cada trámite.",
        name: "Alejandro Ramirez",
        designation: "Personero Municipal",
        company: "la Alcaldia",
        image: "https://scontent.frmu1-1.fna.fbcdn.net/v/t31.18172-8/272291_112865415476259_5629922_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=CqYFUUjDqiMAX_yTk8C&_nc_ht=scontent.frmu1-1.fna&oh=00_AfAZX50t5BHA1WYYQohiaBVqMjJdCWSuURadPnrZ-9s_MQ&oe=6465D3BC",
    },
    {
        testimonial:
            "Demostró su agilidad en el aprendizaje de cada tarea que le fue encomendada y la realizó de la mejor forma",
        name: "Sebastián Delgado",
        designation: "Jefe en Sitemas",
        company: "Cinde",
        image: "https://scontent.frmu1-1.fna.fbcdn.net/v/t39.30808-6/268390774_10158756313120945_1637690823303362006_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zUwDKvH_noIAX8xkdxI&_nc_oc=AQl-dqARMILkvKdmNr4hAEsZkVVx6uA1XWL8d31Zpps5NvuSwNnA6R598zqJVisQZwA&_nc_ht=scontent.frmu1-1.fna&oh=00_AfDN7O4TrmDGE13DtLhGRlSKddvNkzJiSlo7pRe-gcOZuQ&oe=6444490F",
    },
];

const projects = [
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