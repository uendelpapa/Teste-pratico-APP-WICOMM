import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: (
          <CircleCheckIcon className="size-4" />
        ),
        info: (
          <InfoIcon className="size-4" />
        ),
        warning: (
          <TriangleAlertIcon className="size-4" />
        ),
        error: (
          <OctagonXIcon className="size-4" />
        ),
        loading: (
          <Loader2Icon className="size-4 animate-spin" />
        ),
      }}
      style={
        {
          "--normal-bg": "#FAFAF8",
          "--normal-text": "#2C2C2C",
          "--normal-border": "#E5E5E5",
          "--border-radius": "16px",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast font-sans rounded-2xl shadow-xl",
          title: "font-bold text-sm",
          description: "text-xs opacity-90",
          success: "!bg-primary !text-white !border-primary [&_svg]:!text-white [&_[data-description]]:!text-white/90",
          info: "!bg-neutral-gray-900 !text-white !border-neutral-gray-900 [&_svg]:!text-primary [&_[data-description]]:!text-white/80",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
