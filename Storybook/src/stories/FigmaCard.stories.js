// FigmaCard.stories.js
import FigmaCard from "./FigmaCard";

export default {
  title: "Components/FigmaCard",
  component: FigmaCard,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/HB4VLPxdC4U5hTlhQUqzdj/FiberSight?node-id=548-183&t=KTEluFTPTdba4Mhy-1",
    },
    docs: {
      description: {
        component:
          "Card component built using design tokens extracted from Figma.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "success"],
      description: "Card variant style",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Card size",
    },
    title: {
      control: "text",
      description: "Card title",
    },
    description: {
      control: "text",
      description: "Card description",
    },
    imageUrl: {
      control: "text",
      description: "Optional image URL",
    },
    onClick: {
      action: "clicked",
      description: "Click handler function",
    },
  },
};

export const Default = {
  args: {
    title: "Default Card",
    description:
      "This is a default card component built using Figma design tokens.",
  },
};

export const Primary = {
  args: {
    variant: "primary",
    title: "Primary Card",
    description:
      "Primary variant with blue accent colors from the Figma design system.",
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
    title: "Secondary Card",
    description: "Secondary variant with purple accent colors.",
  },
};

export const Success = {
  args: {
    variant: "success",
    title: "Success Card",
    description: "Success variant with green accent for positive actions.",
  },
};

export const WithImage = {
  args: {
    variant: "primary",
    title: "Card with Image",
    description: "Card component featuring an image.",
    imageUrl:
      "https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=160&fit=crop&crop=center",
  },
};

export const SmallSize = {
  args: {
    size: "small",
    variant: "default",
    title: "Small Card",
    description: "Compact card size for tight layouts.",
  },
};

export const LargeSize = {
  args: {
    size: "large",
    variant: "primary",
    title: "Large Card",
    description: "Extended card size with more padding.",
    imageUrl:
      "https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=160&fit=crop&crop=center",
  },
};

export const Interactive = {
  args: {
    variant: "secondary",
    title: "Interactive Card",
    description: "Click this card to see the interaction.",
    onClick: () => alert("Card clicked!"),
  },
};
