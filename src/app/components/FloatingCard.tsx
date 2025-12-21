import { ArrowRight } from "lucide-react";

function SmallLogo({ label }: { label: string }) {
  return (
    <div className="text-blue-200/70 text-sm font-bold hover:text-white transition-colors duration-300 cursor-pointer">
      {label}
    </div>
  );
}

export default function FloatingCard() {
  return (
    <section className="relative -mt-10">
      <div className="container mx-auto px-6">
        <div className="relative">
          <div
            className="mx-auto w-full bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 rounded-2xl shadow-2xl border border-blue-700/30 text-white p-10 md:p-14"
            style={{ maxWidth: "1100px" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-center">
              {/* Text */}
              <div>
                <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight">
                  Full financial visibility all in one place
                </h3>
              </div>

              <div>
                <p className="text-blue-100/80 text-sm md:text-base leading-relaxed">
                  Get interest on your money, personalised budgeting and much more features.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs text-blue-300/70 font-bold tracking-wider uppercase">Featured In</span>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-800/40 backdrop-blur-sm rounded-xl flex items-center justify-center text-white font-bold border border-blue-600/30 shadow-lg">
                    M.
                  </div>
                  <span className="text-sm font-semibold text-blue-50">Modern Finance</span>
                </div>
              </div>

              <div className="flex items-center justify-end">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-blue-700/40 backdrop-blur-md border-2 border-blue-500/40 px-7 py-3.5 rounded-xl text-sm font-bold hover:bg-blue-600/50 hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Bottom logos */}
            <div className="mt-10 border-t border-blue-700/20 pt-8 flex flex-wrap items-center justify-between gap-6">
              <SmallLogo label="M." />
              <SmallLogo label="DOLORE" />
              <SmallLogo label="CONSULT" />
              <SmallLogo label="FinAdvisors" />
              <SmallLogo label="SPONSOR" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}