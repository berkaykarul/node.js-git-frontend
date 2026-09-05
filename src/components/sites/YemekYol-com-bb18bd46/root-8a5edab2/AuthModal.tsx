"use client";

import { CloseIcon, YemekYolMark } from "@/components/sites/YemekYol-com-bb18bd46/shared/icons";

type AuthModalProps = {
  open: boolean;
  onClose: () => void;
};

export function AuthModal({ open, onClose }: AuthModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-title"
        className="relative w-full max-w-[420px] rounded-2xl bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.24)]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Sign in or Sign up"
          className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-full hover:bg-[#f3f3f3]"
        >
          <CloseIcon className="size-5 text-[#191919]" />
        </button>
        <div className="mb-6 mt-2 flex justify-center">
          <YemekYolMark className="h-7 w-12 text-[#eb1700]" />
        </div>
        <h2 id="auth-title" className="text-center text-[24px] font-bold text-[#191919]">
          Sign in or Sign up
        </h2>
        <p className="mt-2 text-center text-[14px] text-[#767676]">
          Continue to save addresses, track orders, and get YemekYol deals.
        </p>
        <form
          className="mt-6 space-y-3"
          onSubmit={(event) => {
            event.preventDefault();
            onClose();
          }}
        >
          <label className="block">
            <span className="sr-only">Email</span>
            <input
              type="email"
              required
              placeholder="Email"
              className="h-12 w-full rounded-xl border border-[#e0e0e0] px-4 text-[16px] text-[#191919] outline-none placeholder:text-[#767676] focus:border-[#191919]"
            />
          </label>
          <button
            type="submit"
            className="flex h-12 w-full items-center justify-center rounded-full bg-[#eb1700] text-[16px] font-bold text-white"
          >
            Continue
          </button>
        </form>
        <div className="my-5 flex items-center gap-3 text-[12px] uppercase tracking-wide text-[#767676]">
          <span className="h-px flex-1 bg-[#e0e0e0]" />
          or
          <span className="h-px flex-1 bg-[#e0e0e0]" />
        </div>
        <div className="space-y-3">
          {["Continue with Google", "Continue with Apple", "Continue with Facebook"].map(
            (label) => (
              <button
                key={label}
                type="button"
                onClick={onClose}
                className="flex h-12 w-full items-center justify-center rounded-full border border-[#e0e0e0] text-[16px] font-semibold text-[#191919] hover:bg-[#f7f7f7]"
              >
                {label}
              </button>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
