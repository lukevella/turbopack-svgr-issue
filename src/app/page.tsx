import IfNeedBe from "@/assets/if-need-be.svg";
import No from "@/assets/no.svg";
import Yes from "@/assets/yes.svg";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex flex-col gap-[32px] items-center">
        <p>All these SVGs should be different:</p>
        <div className="flex gap-4 justify-center items-center">
          <Yes className="size-5" />
          <No className="size-5" />
          <IfNeedBe className="size-5" />
        </div>
      </div>
    </main>
  );
}
