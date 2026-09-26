"use client";

import { CloseIcon } from "@/components/icons";
import { useEffect, useRef, type ReactNode } from "react";

type DialogProps = {
  open: boolean;
  labelledBy: string;
  onClose: () => void;
  children: ReactNode;
};

export default function Dialog({
  open,
  labelledBy,
  onClose,
  children,
}: DialogProps) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;

    if (open && !element.open) element.showModal();
    if (!open && element.open) element.close();
  }, [open]);

  return (
    <dialog
      ref={dialog}
      aria-labelledby={labelledBy}
      onClose={onClose}
      className="backdrop:bg-ink/50 m-0 size-full max-h-none max-w-none overflow-y-auto overscroll-contain bg-transparent p-0"
    >
      <div
        onClick={({ target, currentTarget }) =>
          target === currentTarget && onClose()
        }
        className="flex min-h-full items-center justify-center p-6"
      >
        <div className="max-w-content inset-ring-hairline relative w-full rounded-lg bg-white px-6 py-8 inset-ring md:p-12">
          <button
            type="button"
            onClick={onClose}
            className="text-muted hover:text-ink md:text-ink absolute top-6 right-3 p-3 md:top-5 md:right-5"
          >
            <span className="sr-only">Close</span>
            <CloseIcon className="size-3.5" />
          </button>

          {children}
        </div>
      </div>
    </dialog>
  );
}
