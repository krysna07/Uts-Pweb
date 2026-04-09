import type { CSSProperties } from "react";
import Image from "next/image";

interface ProjectPreviewProps {
  title: string;
  image: string;
  liveUrl?: string;
  variant?: "card" | "detail";
  priority?: boolean;
  preview?: {
    cardScale?: number;
    cardOffsetY?: number;
    detailScaleMobile?: number;
    detailScaleDesktop?: number;
    detailOffsetY?: number;
  };
}

const previewConfig = {
  card: {
    frame: "relative h-48 w-full overflow-hidden bg-slate-200 dark:bg-slate-800",
    iframe:
      "absolute top-0 left-1/2 h-[720px] w-[1280px] origin-top border-0 bg-white pointer-events-none [transform:translate(calc(-50%+var(--preview-offset-x)),var(--preview-offset-y))_scale(var(--preview-scale-mobile))]",
  },
  detail: {
    frame:
      "relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 bg-slate-200 dark:bg-slate-800",
    iframe:
      "absolute top-0 left-1/2 h-[960px] w-[1440px] origin-top border-0 bg-white pointer-events-none [transform:translate(calc(-50%+var(--preview-offset-x)),var(--preview-offset-y))_scale(var(--preview-scale-mobile))] md:[transform:translate(calc(-50%+var(--preview-offset-x)),var(--preview-offset-y))_scale(var(--preview-scale-desktop))]",
  },
} as const;

export default function ProjectPreview({
  title,
  image,
  liveUrl,
  variant = "card",
  priority = false,
  preview,
}: ProjectPreviewProps) {
  const config = previewConfig[variant];
  const previewStyle = {
    "--preview-offset-x": "0px",
    "--preview-offset-y":
      `${variant === "card" ? preview?.cardOffsetY ?? 0 : preview?.detailOffsetY ?? 0}px`,
    "--preview-scale-mobile":
      `${variant === "card" ? preview?.cardScale ?? 0.29 : preview?.detailScaleMobile ?? 0.36}`,
    "--preview-scale-desktop":
      `${preview?.detailScaleDesktop ?? 0.52}`,
  } as CSSProperties;

  return (
    <div className={config.frame}>
      {liveUrl ? (
        <>
          <iframe
            src={liveUrl}
            title={`Preview ${title}`}
            loading={priority ? "eager" : "lazy"}
            className={config.iframe}
            style={previewStyle}
            tabIndex={-1}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/10 pointer-events-none" />
        </>
      ) : (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority={priority}
        />
      )}
    </div>
  );
}
