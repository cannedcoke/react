# front-react

Frontend desarrollado con React que replica la misma interfaz del proyecto [vanilla](https://github.com/cannedcoke/vanilla), permitiendo comparar directamente cómo se estructura y se razona una misma aplicación en Vanilla JS versus en React. Se conecta al mismo backend compartido.

## Estructura

```
front-react/
├── src/           # Componentes y lógica de la aplicación React
├── public/        # Recursos públicos
└── package.json   # Dependencias y scripts
```

## Tecnologías

- React
- JavaScript (ES6+)
- CSS

## Instalación

1. Clona el repositorio principal:

```bash
git clone https://github.com/cannedcoke/react.git
cd react/front-react
```

2. Instalá las dependencias:

```bash
npm install
```

3. Levantá el backend desde el repositorio [vanilla-vs-react](https://github.com/cannedcoke/vanilla-vs-react).

4. Iniciá la aplicación:

```bash
npm start
```

## Relación con otros repositorios

Este proyecto es parte de un conjunto de tres repositorios:

- [vanilla](https://github.com/cannedcoke/vanilla) — la misma interfaz implementada en Vanilla JS
- [react/front-react](https://github.com/cannedcoke/react/tree/main/front-react) — este repositorio, frontend en React
- [vanilla-vs-react](https://github.com/cannedcoke/vanilla-vs-react) — el backend compartido en Node.js