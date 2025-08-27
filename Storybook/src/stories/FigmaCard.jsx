import React from "react";
import { colors, typography, spacing, borderRadius, shadows } from "./token";

const FigmaCard = ({
  title,
  description,
  imageUrl,
  variant = "default",
  size = "medium",
  onClick,
  className = "",
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return {
          borderColor: colors.primary[500],
          backgroundColor: colors.primary[50],
        };
      case "secondary":
        return {
          borderColor: colors.secondary[500],
          backgroundColor: colors.secondary[50],
        };
      case "success":
        return {
          borderColor: colors.success,
          backgroundColor: colors.neutral[50],
        };
      default:
        return {
          borderColor: colors.neutral[200],
          backgroundColor: colors.neutral[50],
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return {
          padding: spacing[4],
          maxWidth: "280px",
        };
      case "large":
        return {
          padding: spacing[8],
          maxWidth: "400px",
        };
      default:
        return {
          padding: spacing[6],
          maxWidth: "320px",
        };
    }
  };

  const baseStyles = {
    border: "1px solid",
    borderRadius: borderRadius.lg,
    boxShadow: shadows.md,
    cursor: onClick ? "pointer" : "default",
    transition: "all 0.2s ease-in-out",
    fontFamily: typography.fontFamily.sans.join(", "),
    ...getSizeStyles(),
    ...getVariantStyles(),
  };

  const titleStyles = {
    fontSize: typography.fontSize["xl"],
    fontWeight: typography.fontWeight.semibold,
    color: colors.neutral[900],
    marginBottom: spacing[2],
    lineHeight: typography.lineHeight.tight,
  };

  const descriptionStyles = {
    fontSize: typography.fontSize.base,
    color: colors.neutral[600],
    lineHeight: typography.lineHeight.normal,
    marginBottom: imageUrl ? spacing[4] : 0,
  };

  const imageStyles = {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: borderRadius.md,
    marginBottom: spacing[4],
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e) => {
    if (onClick && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      style={baseStyles}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={className}
      {...props}
    >
      {imageUrl && <img src={imageUrl} alt={title} style={imageStyles} />}

      <div>
        <h3 style={titleStyles}>{title}</h3>

        {description && <p style={descriptionStyles}>{description}</p>}
      </div>
    </div>
  );
};

export default FigmaCard;
