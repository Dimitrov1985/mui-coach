'use client'
import { useLang } from '../lib/LangContext'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact

  return (
    <section id="contact" className="border-t border-[#1f1f1f] py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <p className="font-[family-name:var(--font-barlow-c)] text-xs font-bold tracking-[6px] uppercase text-red-600 mb-4 flex items-center gap-3">
              <span className="block w-7 h-0.5 bg-red-600" />{c.label}
            </p>
            <h2 className="font-[family-name:var(--font-anton)] leading-none text-white mb-8" style={{ fontSize: 'clamp(52px, 7vw, 88px)' }}>
              {c.h1}<br /><span className="text-red-600">{c.h2}</span>
            </h2>
            <p className="font-[family-name:var(--font-barlow)] text-[#888] text-base leading-relaxed mb-10">{c.sub}</p>

            <div className="flex flex-col gap-4">
              <a href="https://line.me/ti/p/~muitrainer" target="_blank" rel="noreferrer"
                className="flex items-center gap-4 p-5 border border-[#1f1f1f] hover:border-[#00B900] transition-colors group">
                <div className="w-12 h-12 bg-[#00B900]/10 flex items-center justify-center text-[#00B900] flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                  </svg>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-barlow-c)] text-[10px] font-bold tracking-[3px] uppercase text-[#555] mb-0.5">LINE</p>
                  <p className="font-[family-name:var(--font-barlow)] text-white font-semibold text-base group-hover:text-[#00B900] transition-colors">{c.lineCta}</p>
                </div>
              </a>

              <a href="https://wa.me/66945953441" target="_blank" rel="noreferrer"
                className="flex items-center gap-4 p-5 border border-[#1f1f1f] hover:border-[#25D366] transition-colors group">
                <div className="w-12 h-12 bg-[#25D366]/10 flex items-center justify-center text-[#25D366] flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-barlow-c)] text-[10px] font-bold tracking-[3px] uppercase text-[#555] mb-0.5">WhatsApp</p>
                  <p className="font-[family-name:var(--font-barlow)] text-white font-semibold text-base group-hover:text-[#25D366] transition-colors">{c.waCta}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#111] border border-[#1f1f1f] p-10">
            <h3 className="font-[family-name:var(--font-anton)] text-3xl text-white uppercase mb-2">{c.formTitle}</h3>
            <p className="font-[family-name:var(--font-barlow)] text-[#555] text-sm mb-8">{c.submitSub}</p>
            <form action="https://formspree.io/f/xpwzgqvp" method="POST" className="flex flex-col gap-5">
              <div>
                <label className="font-[family-name:var(--font-barlow-c)] text-[10px] font-bold tracking-[3px] uppercase text-[#555] block mb-2">{c.name}</label>
                <input name="name" type="text" required placeholder="Anna K."
                  className="w-full bg-[#0a0a0a] border border-[#1f1f1f] focus:border-red-600 outline-none px-4 py-3 font-[family-name:var(--font-barlow)] text-white text-sm placeholder-[#333] transition-colors" />
              </div>
              <div>
                <label className="font-[family-name:var(--font-barlow-c)] text-[10px] font-bold tracking-[3px] uppercase text-[#555] block mb-2">{c.phone}</label>
                <input name="phone" type="text" required placeholder="+66 xx xxx xxxx"
                  className="w-full bg-[#0a0a0a] border border-[#1f1f1f] focus:border-red-600 outline-none px-4 py-3 font-[family-name:var(--font-barlow)] text-white text-sm placeholder-[#333] transition-colors" />
              </div>
              <div>
                <label className="font-[family-name:var(--font-barlow-c)] text-[10px] font-bold tracking-[3px] uppercase text-[#555] block mb-2">{c.goal}</label>
                <input name="goal" type="text" placeholder={c.goalPlaceholder}
                  className="w-full bg-[#0a0a0a] border border-[#1f1f1f] focus:border-red-600 outline-none px-4 py-3 font-[family-name:var(--font-barlow)] text-white text-sm placeholder-[#333] transition-colors" />
              </div>
              <button type="submit"
                className="font-[family-name:var(--font-barlow-c)] font-bold text-sm tracking-[3px] uppercase bg-red-600 hover:bg-red-700 text-white py-4 transition-colors mt-2">
                {c.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
