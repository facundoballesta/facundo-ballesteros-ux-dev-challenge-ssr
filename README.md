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
- Access the `SideBar` in normal or collapsible view, and also access the `Messages` section with the correct EmptyState.
- View the `EmptyState` of the `Order` Tab and switch between tabs

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
The `Table` component displays a responsive table of recent transactions, allowing column sorting and viewing details of each transaction via a Drawer. It is optimized for desktop and mobile, showing fewer columns on small screens.

### Props
- **data** (`ProductProps[]`): Array of objects with the transaction information to display.

#### `ProductProps`
- `id`: `number` — Transaction ID.
- `customer`: `string` — Customer name.
- `date`: `string` — Transaction date.
- `product`: `string` — Product name.
- `status`: `"Approved" | "Pending" | "Rejected"` — Transaction status.
- `email`: `string` — Customer email.
- `amount`: `string` — Transaction amount.
- `paymentMethod`: `string` — Payment method.

### Features
- **Responsive**: Changes the number of columns based on screen size.
- **Sorting**: Allows sorting by any column by clicking the header.
- **Detail Drawer**: Clicking a row opens a Drawer with transaction details.
- **Accessibility**: Uses roles and attributes to improve the experience for users with assistive technologies.

### Example Usage
```tsx
<Table data={transactionsArray} />
```

---

## StatusBadge Component

### Overview
`StatusBadge` is a visual component that displays the status of a transaction with a distinctive color and icon.

### Props
- **status** (`"Approved" | "Pending" | "Rejected"`): Status to display.
- **iconOnly** (`boolean`, optional): If `true`, only shows the icon (used on mobile).

### Example Usage
```tsx
<StatusBadge status="Approved" />
<StatusBadge status="Pending" iconOnly />
```

---

## Sidebar Component Documentation

### Overview
The `Sidebar` component is a side navigation bar that allows quick access to the main sections of the application. It includes a collapsible mode to optimize space on small screens or when the user desires.

### Features
- **Collapsible**: The user can collapse or expand the sidebar using the collapse button.
- **Navigation**: Includes navigation buttons (`NavButton`) to go to Home and Messages, each with its respective icon.
- **Accessibility**: Buttons have appropriate labels and roles to facilitate navigation with assistive technologies.
- **Styles**: Uses conditional classes to apply different styles in collapsed or expanded mode.

### Example Usage
```tsx
<Sidebar />
```

### Notes
- The collapse state is managed internally with `useState`.
- The `CollapseButton` component toggles the sidebar state.
- Icons come from `@heroicons/react`.

---

## Card Component Documentation

### Overview
The `Card` component displays a visual summary of a key performance indicator (KPI) such as sales, revenue, or active users. It includes the current value, a historical comparison, and an icon indicating whether the trend is positive or negative.

### Props
- **title** (`string`): Title of the indicator (e.g., "Sales", "Revenue").
- **value** (`string`): Current value of the indicator.
- **historicalAmount** (`string`): Historical value for comparison (e.g., "+5%", "-2 sales").
- **result** (`"positive" | "negative" | null`): Indicates if the trend is positive, negative, or neutral. Changes the border color and icon.

### Features
- **Trend Icons**: Up arrow (green) for positive, down arrow (red) for negative.
- **Colors**: Border and value change color according to the trend.
- **Accessibility**: Text content is clear and icons have adequate contrast.
- **Styles**: Uses CSS classes for visual and responsive styles.

### Example Usage
```tsx
<Card
  title="Sales"
  value="$1,200"
  historicalAmount="+5%"
  result="positive"
/>
```

### Notes
- If the title is "Active Now", the historical text shows "since last hour".
- If there is no value, it shows "-".

---

## EmptyPages Component Documentation

### Overview
The `EmptyPages` component displays a custom empty state for the orders or messages sections, depending on the received props. It is useful to indicate to the user that there is no data available in the selected section.

### Props
- **orders** (`boolean`, optional): If `true`, shows the empty state for orders.
- **messages** (`boolean`, optional): If `true`, shows the empty state for messages.

### Features
- **Illustrative Images**: Shows a different image depending on the type of empty state (orders or messages).
- **Custom Texts**: Changes the title and subtitle according to the section.
- **Styles**: Uses CSS classes for visual and responsive styles.

### Example Usage
```tsx
<EmptyPages orders />
<EmptyPages messages />
```

### Notes
- If neither prop is `true`, the component renders nothing.
- Intended for use in tabs or sections where there may be no data.

---
