import { Instagram, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5585991961212";
const INSTAGRAM_URL =
  "https://www.instagram.com/ripardoegondimadvogados?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="group flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_10px_30px_-6px_rgba(0,0,0,0.35)] transition-transform hover:scale-110"
        style={{
          background:
            "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
        }}
      >
        <Instagram className="h-6 w-6" />
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.55)] transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" fill="white" />
      </a>
    </div>
  );
}
