# UX Developer SSR. Challenge

## The Challenge

The client has requested that you build an Admin Dashboard view to track the latest transactions in sales and revenue. You can find the Figma file with the various views and flows [here](https://www.figma.com/design/ALglLwurlZjU28yCBYjraK/UX-Dev-Challenge-SSR).

Please deliver a complete experience using React. If you are familiar with type-checking tools like TypeScript or PropTypes, feel free to use them. You may also use a CSS-in-JS library (such as Emotion or Styled Components), SASS, or plain CSS.

**All views must be responsive** and display correctly on Desktop, Tablet, and Mobile. You will only receive a desktop mockup. On mobile, the user should be able to see as much information as possible on the screen while maintaining design coherence.

### User Requirements

Your users should be able to:

- View the optimal layout based on their device's screen size
- See hover and focus states for all interactive elements on the page
- Access more information about a specific transaction through a drawer
- Access to the `SideBar` in the normal or collapsable view, also can access to the `Messages` section with the correct EmptyState.
- View the `EmptyState` of the `Order` Tab and ability to switch between tabs

### Documentation and Delivery

Upon delivery, please provide clear explanations of your decision-making process regarding the responsive design. Make sure to document your code as thoroughly as possible.

# The project

## How to Run the Project

### Prerequisites

- Node.js and npm installed on your system.

### Installing Dependencies

Run the following command in the project root to install all necessary dependencies:

```bash
npm install
```

### Running the Application in Development Mode

To start the development server and view the application in your browser:

```bash
npm run dev
```

This will launch the application in development mode using Vite. By default, it will be available at `http://localhost:5173` (or the port indicated in your terminal).

### Running Storybook

To view and develop components in isolation using Storybook:

```bash
npm run storybook
```

This will open Storybook at `http://localhost:6006`.

---

# Components

## Drawer Component Documentation

### Overview
The `Drawer` component is a reusable side panel designed to display detailed information about a specific transaction or order. It slides in from the right and overlays the main content, providing a focused view of transaction details without navigating away from the current page.

### Props
- **open** (`boolean`): Controls the visibility of the drawer. When `true`, the drawer is visible.
- **onClose** (`() => void`): Callback function triggered when the drawer is requested to close (e.g., overlay click or close button).
- **imageSrc** (`string`, optional): URL of the product image to display at the top of the drawer.
- **imageAlt** (`string`, optional): Alternative text for the product image for accessibility.
- **product** (`string`): Name of the product.
- **customer** (`string`): Name of the customer.
- **status** (`ProductStatusProps`): Status of the transaction, passed to the `StatusBadge` component.
- **date** (`string`): Date of the transaction.
- **amount** (`string`): Transaction amount.
- **paymentMethod** (`string`): Payment method used.
- **id** (`number | string`): Transaction ID.

### Features
- **Accessibility**: Includes ARIA attributes and keyboard navigation support.
- **Responsive**: Designed to work across desktop, tablet, and mobile layouts.
- **Image Loading State**: Shows a loading spinner while the product image loads.
- **Status Badge**: Integrates with the `StatusBadge` component for visual status indication.
- **Close Button**: Accessible close button with icon and ARIA label.

### Example Usage
```tsx
<Drawer
  open={isDrawerOpen}
  onClose={handleDrawerClose}
  imageSrc="/path/to/image.jpg"
  imageAlt="Product image"
  product="Product Name"
  customer="Customer Name"
  status="delivered"
  date="2025-06-25"
  amount="$100.00"
  paymentMethod="Credit Card"
  id={12345}
/>
```

### Notes
- The drawer overlay closes the drawer when clicked.
- The component is focused on UI/UX and accessibility, following the challenge requirements.
- All interactive elements have visible focus and hover states.

---

## Table Component Documentation

### Overview
El componente `Table` muestra una tabla responsiva de transacciones recientes, permitiendo ordenar columnas y ver detalles de cada transacción mediante un Drawer. Está optimizado para desktop y mobile, mostrando menos columnas en pantallas pequeñas.

### Props
- **data** (`ProductProps[]`): Arreglo de objetos con la información de las transacciones a mostrar.

#### `ProductProps`
- `id`: `number` — ID de la transacción.
- `customer`: `string` — Nombre del cliente.
- `date`: `string` — Fecha de la transacción.
- `product`: `string` — Nombre del producto.
- `status`: `"Approved" | "Pending" | "Rejected"` — Estado de la transacción.
- `email`: `string` — Email del cliente.
- `amount`: `string` — Monto de la transacción.
- `paymentMethod`: `string` — Método de pago.

### Características
- **Responsive**: Cambia el número de columnas según el tamaño de pantalla.
- **Ordenamiento**: Permite ordenar por cualquier columna haciendo click en el encabezado.
- **Drawer de Detalle**: Al hacer click en una fila, se abre un Drawer con los detalles de la transacción.
- **Accesibilidad**: Uso de roles y atributos para mejorar la experiencia de usuarios con tecnologías asistivas.

### Ejemplo de uso
```tsx
<Table data={transactionsArray} />
```

---

## StatusBadge Component

### Overview
`StatusBadge` es un componente visual que muestra el estado de una transacción con un color e ícono distintivo.

### Props
- **status** (`"Approved" | "Pending" | "Rejected"`): Estado a mostrar.
- **iconOnly** (`boolean`, opcional): Si es `true`, solo muestra el ícono (usado en mobile).

### Ejemplo de uso
```tsx
<StatusBadge status="Approved" />
<StatusBadge status="Pending" iconOnly />
```

---

## Sidebar Component Documentation

### Overview
El componente `Sidebar` es una barra de navegación lateral que permite acceder rápidamente a las secciones principales de la aplicación. Incluye un modo colapsable para optimizar el espacio en pantallas pequeñas o cuando el usuario lo desee.

### Características
- **Colapsable**: El usuario puede contraer o expandir la barra lateral usando el botón de colapso.
- **Navegación**: Incluye botones de navegación (`NavButton`) para ir a Home y Messages, cada uno con su respectivo ícono.
- **Accesibilidad**: Los botones tienen etiquetas y roles apropiados para facilitar la navegación con tecnologías asistivas.
- **Estilos**: Usa clases condicionales para aplicar estilos diferentes en modo colapsado o expandido.

### Ejemplo de uso
```tsx
<Sidebar />
```

### Notas
- El estado de colapso se maneja internamente con `useState`.
- El componente `CollapseButton` alterna el estado de la barra lateral.
- Los íconos provienen de `@heroicons/react`.

---

## Card Component Documentation

### Overview
El componente `Card` muestra un resumen visual de un indicador clave (KPI) como ventas, ingresos o usuarios activos. Incluye el valor actual, una comparación histórica y un ícono que indica si la tendencia es positiva o negativa.

### Props
- **title** (`string`): Título del indicador (ejemplo: "Sales", "Revenue").
- **value** (`string`): Valor actual del indicador.
- **historicalAmount** (`string`): Valor histórico para comparación (ejemplo: "+5%", "-2 ventas").
- **result** (`"positive" | "negative" | null`): Indica si la tendencia es positiva, negativa o neutra. Cambia el color del borde y el ícono.

### Características
- **Íconos de tendencia**: Flecha hacia arriba (verde) para positivo, flecha hacia abajo (rojo) para negativo.
- **Colores**: El borde y el valor cambian de color según la tendencia.
- **Accesibilidad**: El contenido textual es claro y los íconos tienen contraste adecuado.
- **Estilos**: Usa clases CSS para estilos visuales y responsivos.

### Ejemplo de uso
```tsx
<Card
  title="Sales"
  value="$1,200"
  historicalAmount="+5%"
  result="positive"
/>
```

### Notas
- Si el título es "Active Now", el texto histórico muestra "since last hour".
- Si no hay valor, muestra "-".

---

## EmptyPages Component Documentation

### Overview
El componente `EmptyPages` muestra un estado vacío personalizado para las secciones de órdenes o mensajes, dependiendo de las props recibidas. Es útil para indicar al usuario que no hay datos disponibles en la sección seleccionada.

### Props
- **orders** (`boolean`, opcional): Si es `true`, muestra el estado vacío para órdenes.
- **messages** (`boolean`, opcional): Si es `true`, muestra el estado vacío para mensajes.

### Características
- **Imágenes ilustrativas**: Muestra una imagen diferente según el tipo de estado vacío (órdenes o mensajes).
- **Textos personalizados**: Cambia el título y subtítulo según la sección.
- **Estilos**: Usa clases CSS para estilos visuales y responsivos.

### Ejemplo de uso
```tsx
<EmptyPages orders />
<EmptyPages messages />
```

### Notas
- Si ninguna prop es `true`, el componente no renderiza nada.
- Pensado para usarse en tabs o secciones donde puede no haber datos.

---
