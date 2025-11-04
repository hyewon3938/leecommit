import { redirect } from "next/navigation";

export default function ShopRedirectPage() {
  const url = process.env.NEXT_PUBLIC_SMARTSTORE_URL;
  // const url = null;

  if (!url) {
    return (
      <main
        style={{
          padding: "40px 20px",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        <p>스토어 주소가 아직 설정되지 않았습니다.</p>
      </main>
    );
  }

  redirect(url);
}
