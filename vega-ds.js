/* ═══════════════════════════════════════════════════════════
   VEGA Design System  ·  vega-ds.js
   Tokens, CSS injection e funções de componente compartilhadas
   ═══════════════════════════════════════════════════════════ */

// ── 1. CSS INJECTION ────────────────────────────────────────
(function injectDS(){
  const css=`
/* ─── Reset / Base ─── */
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
body{margin:0;font-family:'Roboto',-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;background:#fff;-webkit-font-smoothing:antialiased}
.shell{width:390px;min-height:100vh;margin:0 auto;background:#fff;overflow:hidden}

/* ─── CSS Tokens ─── */
:root{
  --clr-primary:#00413C;
  --clr-primary-light:#014D40;
  --clr-lime:#D4D92E;
  --clr-lime-hover:#BCC205;
  --clr-ink:#161A18;
  --clr-ink-2:#3D4441;
  --clr-muted:#727873;
  --clr-placeholder:#9E9E9E;
  --clr-border:#E0E0E0;
  --clr-border-light:#ECECE7;
  --clr-surface:#F4F4EE;
  --clr-error:#EF4444;
  --clr-error-bg:#FEE2E2;
  --clr-error-text:#991B1B;
  --clr-warn:#E89A1F;
  --clr-warn-bg:#FCEFD2;
  --clr-warn-text:#A2660B;
  --clr-success:#2C7A65;
  --clr-success-bg:#E8F0EC;
  --clr-success-text:#065F46;
  --clr-focus:#C8B400;
  --clr-label-float:#A89800;
  --radius-sm:6px;
  --radius-md:8px;
  --radius-lg:12px;
  --radius-xl:16px;
  --radius-2xl:24px;
}

/* ─── App Header ─── */
.app-hdr{
  background:var(--clr-primary);
  padding:8px 16px;
  height:62.86px;
  display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:8px;
  box-sizing:border-box;
}

/* ─── Avatar ─── */
.avatar{
  width:36px;height:36px;border-radius:var(--radius-lg);
  background:var(--clr-lime);
  display:flex;align-items:center;justify-content:center;
  font-size:13px;font-weight:800;color:#1B4332;
  overflow:hidden;flex-shrink:0;
}

/* ─── DS Text Field ─── */
.tf-wrap{
  position:relative;display:flex;align-items:center;gap:8px;
  width:100%;height:56px;
  background:#fff;border:1px solid var(--clr-border);border-radius:var(--radius-md);
  padding:0 10px;cursor:text;
  transition:border-color .15s,box-shadow .15s;
}
.tf-wrap:focus-within{border-color:var(--clr-focus);box-shadow:0 0 0 3px rgba(200,180,0,.12)}
.tf-wrap.tf-error{border-color:var(--clr-error);box-shadow:0 0 0 3px rgba(239,68,68,.1)}
.tf-wrap.tf-error:focus-within{border-color:var(--clr-error)}
.tf-inner{position:relative;flex:1;height:100%;display:flex;align-items:center}
.tf-label{
  position:absolute;left:0;top:50%;transform:translateY(-50%);
  font-size:14px;color:var(--clr-placeholder);
  pointer-events:none;white-space:nowrap;
  transition:top .15s,font-size .15s,color .15s,transform .15s,font-weight .15s;
}
.tf-wrap:focus-within .tf-label,
.tf-wrap.tf-filled .tf-label{top:9px;transform:translateY(0);font-size:11px;font-weight:600;color:var(--clr-label-float)}
.tf-wrap.tf-error .tf-label,
.tf-wrap.tf-error:focus-within .tf-label{color:var(--clr-error)}
.tf-input{
  width:100%;border:none;outline:none;background:transparent;
  font-size:14px;font-family:inherit;color:#212121;
  padding:0;height:100%;padding-top:0;
  transition:padding-top .15s;
  appearance:none;-webkit-appearance:none;
}
.tf-input::placeholder{color:transparent}
.tf-wrap:focus-within .tf-input,
.tf-wrap.tf-filled .tf-input{padding-top:18px}
.tf-clear{
  flex-shrink:0;width:20px;height:20px;border-radius:50%;
  background:#757575;border:none;cursor:pointer;
  display:flex;align-items:center;justify-content:center;
  color:#fff;font-size:12px;padding:0;transition:background .15s;
}
.tf-clear:hover{background:#424242}
.tf-eye{flex-shrink:0;background:none;border:none;cursor:pointer;padding:0;color:var(--clr-placeholder);display:flex;align-items:center}
.tf-eye:hover{color:#424242}
.tf-prefix{
  flex-shrink:0;display:flex;flex-direction:column;justify-content:flex-end;
  padding:8px 10px 9px 0;border-right:1px solid var(--clr-border);
  margin-right:6px;min-width:54px;
}
.tf-prefix .ddi-label{font-size:10px;font-weight:700;color:var(--clr-label-float);line-height:1;margin-bottom:3px;letter-spacing:.3px}
.tf-prefix .ddi-value{display:flex;align-items:center;gap:5px;font-size:14px;font-weight:600;color:#212121;line-height:1}
.tf-error-msg{font-size:12px;color:var(--clr-error);margin-top:4px;padding-left:2px;display:flex;align-items:center;gap:4px}
.tf-ok-msg{font-size:12px;color:#059669;margin-top:4px;padding-left:2px}

/* ─── Buttons ─── */
/* Primary */
.btn-p,.btn-main{
  width:100%;display:flex;align-items:center;justify-content:center;gap:8px;
  background:var(--clr-lime);color:var(--clr-primary);
  font-family:inherit;font-weight:500;font-size:14px;line-height:20px;letter-spacing:.001em;
  border:none;border-radius:var(--radius-md);
  padding:10px 16px;height:40px;
  cursor:pointer;transition:background .15s;white-space:nowrap;
}
.btn-p:hover,.btn-main:hover{background:var(--clr-lime-hover)}
.btn-p:active,.btn-main:active{background:var(--clr-lime-hover);opacity:.9}
.btn-p:disabled,.btn-main:disabled{background:rgba(225,229,109,.7);color:#4D7A77;cursor:not-allowed}

/* Secondary outline */
.btn-s,.btn-back{
  display:flex;align-items:center;gap:6px;
  background:none;border:1px solid var(--clr-primary);border-radius:var(--radius-md);
  color:var(--clr-primary);
  font-family:inherit;font-weight:500;font-size:14px;line-height:20px;letter-spacing:.001em;
  padding:10px 16px;height:40px;
  cursor:pointer;white-space:nowrap;transition:background .15s;
}
.btn-s:hover,.btn-back:hover{background:#E6ECEC}

/* Destructive */
.btn-d{
  width:100%;display:flex;align-items:center;justify-content:center;gap:8px;
  background:#F4C1BE;color:#9C2621;
  font-family:inherit;font-weight:500;font-size:14px;
  border:none;border-radius:var(--radius-md);
  padding:10px 16px;height:40px;
  cursor:pointer;transition:background .15s;
}
.btn-d:hover{background:#EFA39F}

/* Ghost / neutral */
.btn-o{
  display:flex;align-items:center;justify-content:center;gap:8px;
  background:none;border:1px solid var(--clr-border);border-radius:var(--radius-md);
  color:#374151;
  font-family:inherit;font-weight:500;font-size:14px;
  padding:10px 16px;height:40px;
  cursor:pointer;transition:background .15s;width:100%;
}
.btn-o:hover{background:#F9FAFB}

/* Tertiary — Figma DS */
.btn-t{
  display:flex;align-items:center;justify-content:center;gap:8px;
  background:#3D9442;color:#fff;
  font-family:inherit;font-weight:500;font-size:14px;letter-spacing:.001em;
  border:none;border-radius:var(--radius-md);
  padding:10px 16px;height:40px;
  cursor:pointer;transition:background .15s;width:100%;
}
.btn-t:hover{background:#64A968}
.btn-t:disabled{background:#81C185;cursor:not-allowed}

/* ─── Stepper (legacy) ─── */
.step-dot{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;transition:all .3s;flex-shrink:0}
.step-dot.done{background:#2D6A4F;color:#fff}
.step-dot.active{background:#2D6A4F;color:#fff;box-shadow:0 0 0 3px rgba(45,106,79,.2)}
.step-dot.idle{background:#F3F4F6;color:#9CA3AF;border:1.5px solid #E5E7EB}
.step-line{flex:1;height:2px;background:#E5E7EB;transition:background .3s}
.step-line.done{background:#2D6A4F}

/* ─── Stepper DS ─── */
.ds-stepper{display:flex;align-items:flex-start;width:100%}
.ds-step{display:flex;flex-direction:column;align-items:center;flex:2;min-width:0;padding:0 2px}
.ds-step-circle{border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .25s,border-color .25s}
.ds-step-circle.done{background:#013731;border:none}
.ds-step-circle.active{background:#EDF7F2;border:1.5px dashed #2D6A4F}
.ds-step-circle.inactive{background:#F9FAFB;border:1px solid #E5E7EB}
.ds-step-label{font-weight:500;letter-spacing:.3px;margin-top:6px;white-space:nowrap}
.ds-step-title{text-align:center;line-height:1.3;margin-top:2px}
.ds-connector{flex:1;border-radius:1px;transition:background .25s}
/* mobile sizing */
.ds-stepper-mobile .ds-step-circle{width:44px;height:44px}
.ds-stepper-mobile .ds-connector{height:1.5px;margin-top:22px}
.ds-stepper-mobile .ds-step-label{font-size:10px}
.ds-stepper-mobile .ds-step-title{font-size:11px}
/* web sizing */
.ds-stepper-web .ds-step-circle{width:52px;height:52px}
.ds-stepper-web .ds-connector{height:1.5px;margin-top:26px}
.ds-stepper-web .ds-step-label{font-size:11px}
.ds-stepper-web .ds-step-title{font-size:12px}

/* ─── SubNav ─── */
.subnav{padding:12px 16px;display:flex;align-items:center;gap:12px;border-bottom:1px solid #F3F4F6;background:#fff}
.subnav__back{width:36px;height:36px;border-radius:10px;background:var(--clr-surface);border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0}
.subnav__title{font-size:17px;font-weight:700;color:var(--clr-ink)}

/* ─── Tabs ─── */
.tab-bar{display:flex;border-bottom:1px solid var(--clr-border)}
.tab-item{flex:1;padding:12px 8px;text-align:center;font-size:13px;font-weight:500;color:#9CA3AF;cursor:pointer;border-bottom:2px solid transparent;transition:all .2s;display:flex;align-items:center;justify-content:center;gap:6px}
.tab-item.active{color:var(--clr-primary);border-bottom-color:var(--clr-primary);font-weight:700}

/* ─── Cards ─── */
.card{background:#fff;border:1px solid var(--clr-border);border-radius:var(--radius-md);padding:16px}
.info-cell{flex:1;background:#fff;border:1px solid var(--clr-border);border-radius:var(--radius-md);padding:12px}

/* ─── Section divider ─── */
.sdiv{display:flex;align-items:center;gap:8px;margin:20px 0 12px}
.sdiv span{font-size:13px;font-weight:700;color:#1A1A1A;white-space:nowrap}
.sdiv::after{content:'';flex:1;height:1px;background:var(--clr-border)}

/* ─── Upload zone ─── */
.upload-zone{border:1.5px dashed var(--clr-border);border-radius:var(--radius-md);padding:20px;display:flex;flex-direction:column;align-items:center;gap:6px;cursor:pointer;transition:border-color .15s,background .15s;text-align:center}
.upload-zone:hover{border-color:var(--clr-focus);background:#FFFDE7}

/* ─── Bottom bar ─── */
.bottom-bar{position:sticky;bottom:0;background:rgba(255,255,255,.96);backdrop-filter:blur(12px);border-top:1px solid #F0F0F0;padding:12px 20px 18px}

/* ─── Badges ─── */
.badge{display:inline-flex;align-items:center;gap:4px;font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px}
.badge-green{background:#D1FAE5;color:#065F46}
.badge-yellow{background:#FEF9C3;color:#713F12}
.badge-red{background:var(--clr-error-bg);color:var(--clr-error-text)}
.badge-muted{background:#F3F4F6;color:#6B7280}

/* ─── Checkbox ─── */
.checkbox-box{width:22px;height:22px;min-width:22px;border:2px solid #D1D5DB;border-radius:6px;display:flex;align-items:center;justify-content:center;transition:all .2s;cursor:pointer}
.checkbox-box.on{background:#2D6A4F;border-color:#2D6A4F}

/* ─── Check item ─── */
.chk-item{display:flex;align-items:center;gap:10px;padding:11px 0;border-bottom:1px solid #F3F4F6}
.chk-item:last-child{border-bottom:none}

/* ─── Progress bar ─── */
.pbar-wrap{height:6px;background:#E5E7EB;border-radius:3px;overflow:hidden}
.pbar-fill{height:100%;border-radius:3px;background:linear-gradient(90deg,#40916C,#2D6A4F);transition:width 1.4s ease}

/* ─── Animations ─── */
@keyframes slide-r{from{opacity:0;transform:translateX(30px)}to{opacity:1;transform:translateX(0)}}
@keyframes slide-l{from{opacity:0;transform:translateX(-30px)}to{opacity:1;transform:translateX(0)}}
.anim-r{animation:slide-r .28s cubic-bezier(.25,.8,.25,1) both}
.anim-l{animation:slide-l .28s cubic-bezier(.25,.8,.25,1) both}
@keyframes bounce-in{0%{transform:scale(0);opacity:0}60%{transform:scale(1.12)}100%{transform:scale(1);opacity:1}}
.bounce-in{animation:bounce-in .5s both}
@keyframes pulse{0%,100%{transform:scale(1);opacity:.6}50%{transform:scale(1.18);opacity:0}}
.pulse{animation:pulse 1.8s ease-in-out infinite}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes fade-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
.fade-in{animation:fade-in .35s ease both}
@keyframes score-draw{from{stroke-dashoffset:240}to{stroke-dashoffset:var(--so)}}
.score-arc{animation:score-draw 1.4s ease .4s both}

/* ─── Scrollbar ─── */
.terms-scroll::-webkit-scrollbar{width:4px}
.terms-scroll::-webkit-scrollbar-thumb{background:#D1D5DB;border-radius:2px}
`;
  const el=document.createElement('style');
  el.id='vega-ds-styles';
  el.textContent=css;
  document.head.insertBefore(el,document.head.firstChild);
})();

// ── 2. TOKENS (JS) ──────────────────────────────────────────
const DS={
  color:{
    primary:'#00413C', primaryLight:'#014D40',
    lime:'#D4D92E',    limeHover:'#BCC205',
    ink:'#161A18',     ink2:'#3D4441', muted:'#727873',
    border:'#E0E0E0',  borderLight:'#ECECE7',
    surface:'#F4F4EE',
    error:'#EF4444',   errorBg:'#FEE2E2',
    warn:'#E89A1F',    warnBg:'#FCEFD2',
    success:'#2C7A65', successBg:'#E8F0EC',
  },
  radius:{ sm:'6px', md:'8px', lg:'12px', xl:'16px', xxl:'24px' },
  font:{ base:14, sm:12, xs:11, lg:16, xl:20 },
};

// ── 3. HELPER esc ───────────────────────────────────────────
function esc(v){return String(v).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
window.esc=esc;

// ── 4. DS ICONS ─────────────────────────────────────────────
const DSI={
  arR:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  arL:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  arLGreen:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M11 6l-6 6 6 6" stroke="#013731" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  check:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4 10-9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  bell:'<svg viewBox="0 0 24 24" fill="none" width="20" height="20"><path d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 00-4-5.66V5a2 2 0 10-4 0v.34A6 6 0 006 11v3.2c0 .53-.21 1.05-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  menu:'<svg viewBox="0 0 24 24" fill="none" width="22" height="22"><path d="M4 6h16M4 12h16M4 18h16" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>',
  eye:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" stroke="#9E9E9E" stroke-width="1.8"/><circle cx="12" cy="12" r="3" stroke="#9E9E9E" stroke-width="1.8"/></svg>',
  eyeOff:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M17.94 17.94A10.08 10.08 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22" stroke="#9E9E9E" stroke-width="1.8" stroke-linecap="round"/></svg>',
  upload:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  trash:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  pin:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.4" stroke="currentColor" stroke-width="1.8"/></svg>',
  home:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 22V12h6v10" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
  doc:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M7 3h7l5 5v13H7z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M14 3v5h5" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
  spin:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="animation:spin .8s linear infinite"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2.5" stroke-dasharray="28 56" stroke-linecap="round"/></svg>',
  tree:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 3l-5 7h2.5L5 16h4l-1 4h8l-1-4h4l-4.5-6H17L12 3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
  monitor:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M8 21h8M12 17v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  search:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#9CA3AF" stroke-width="1.8"/><path d="M16.5 16.5L21 21" stroke="#9CA3AF" stroke-width="1.8" stroke-linecap="round"/></svg>',
};
window.DSI=DSI;

/** DSIcon — Lucide icon via data-lucide attribute
 *  name: Lucide icon name (e.g. 'leaf', 'arrow-right')
 *  size: pixel size (number or string)
 *  color: CSS color string (default 'currentColor')
 *  extraStyle: additional inline CSS
 */
function DSIcon(name, size, color, extraStyle){
  const sz = size || 16;
  const col = color || 'currentColor';
  const extra = extraStyle || '';
  return '<i data-lucide="'+name+'" style="display:inline-flex;align-items:center;justify-content:center;width:'+sz+'px;height:'+sz+'px;color:'+col+';flex-shrink:0;'+extra+'"></i>';
}
window.DSIcon=DSIcon;

// ── 5. COMPONENT FUNCTIONS ──────────────────────────────────

/** Logo (img embutida via data URL — preenchida pelo servidor no build) */
let _logoDataUrl='';
window.DSSetLogo=function(url){_logoDataUrl=url;};
function DSLogo(){
  if(_logoDataUrl)return '<img src="'+_logoDataUrl+'" width="48" height="47" style="display:block" alt="vega">';
  // fallback SVG enquanto logo não foi injetada
  return '<svg width="36" height="36" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="rgba(255,255,255,.12)"/><path d="M20 7C12.8 7 7 12.8 7 20c0 4 1.9 7.6 4.8 9.9L20 33l8.2-3.1C31.1 27.6 33 24 33 20c0-7.2-5.8-13-13-13z" fill="#D4D92E"/><path d="M20 14v12M14 20h12" stroke="#00413C" stroke-width="2.5" stroke-linecap="round" opacity=".7"/></svg>';
}
window.DSLogo=DSLogo;

/** AppHeader — barra superior da plataforma logada */
function DSAppHeader(){
  return '<div class="app-hdr">'
    +'<div style="display:flex;align-items:center">'+DSLogo()+'</div>'
    +'<div style="display:flex;align-items:center;gap:14px">'
    +DSI.bell
    +'<div class="avatar">A</div>'
    +DSI.menu
    +'</div></div>';
}
window.DSAppHeader=DSAppHeader;

/** SubNav — barra de título com seta de voltar */
function DSSubNav(title, onBack){
  // onBack: número do step (goStep(n)) ou null (sem botão)
  const btn=onBack!==null
    ?'<button class="subnav__back" onclick="goStep('+onBack+')">'+DSI.arLGreen+'</button>'
    :'<div style="width:36px;height:36px;flex-shrink:0"></div>';
  return '<div class="subnav">'+btn+'<span class="subnav__title">'+title+'</span></div>';
}
window.DSSubNav=DSSubNav;

/** TextField — campo DS com label flutuante
 *  opts: {id, label, type, value, error, inputmode, autocomplete, hasPrefix}
 */
function DSTF(opts){
  const {id,label,type='text',value='',error='',inputmode='text',autocomplete='off',hasPrefix=false}=opts;
  const filled=!!value;
  const wc=['tf-wrap',error?'tf-error':'',filled?'tf-filled':''].filter(Boolean).join(' ');
  const pfx=hasPrefix
    ?'<div class="tf-prefix"><span class="ddi-label">DDI</span><div class="ddi-value"><span style="font-size:16px">&#x1F1E7;&#x1F1F7;</span><span>+55</span></div></div>'
    :'';
  const isText=type==='text'||type==='tel'||type==='email';
  const showClear=filled&&isText;
  const clearBtn=showClear
    ?'<button class="tf-clear" onclick="clear(\''+id+'\')" tabindex="-1">&#x2715;</button>':'' ;
  const eyeBtn=(type==='password'||type==='text-pwd')
    ?'<button class="tf-eye" onclick="tPwd()" tabindex="-1">'+(type==='text-pwd'?DSI.eyeOff:DSI.eye)+'</button>':'' ;
  const inputType=type==='text-pwd'?'text':type;
  return '<div>'
    +'<div class="'+wc+'" onclick="document.getElementById(\''+id+'\').focus()">'
    +pfx
    +'<div class="tf-inner">'
    +'<label class="tf-label" for="'+id+'">'+label+'</label>'
    +'<input id="'+id+'" type="'+inputType+'" class="tf-input"'
    +' value="'+esc(value)+'"'
    +' inputmode="'+inputmode+'"'
    +' autocomplete="'+autocomplete+'"'
    +' oninput="inp(\''+id+'\',this.value)"'
    +' onblur="blur(\''+id+'\')">'
    +'</div>'
    +clearBtn+eyeBtn
    +'</div>'
    +(error?'<div class="tf-error-msg">'+error+'</div>':'')
    +'</div>';
}
window.DSTF=DSTF;

/** SelectField — select estilizado com label flutuante */
function DSSelect(opts){
  const {id,label,value='',options=[],onChange=''}=opts;
  const filled=!!value;
  const wc='tf-wrap'+(filled?' tf-filled':'');
  const onch=onChange||('S.'+id+'=this.value;this.closest(\'.tf-wrap\').classList.add(\'tf-filled\');render()');
  return '<div>'
    +'<div class="'+wc+'" style="padding-right:4px" onclick="document.getElementById(\''+id+'\').focus()">'
    +'<div class="tf-inner">'
    +'<label class="tf-label" for="'+id+'">'+label+'</label>'
    +'<select id="'+id+'" class="tf-input" style="cursor:pointer;appearance:none;-webkit-appearance:none;padding-top:'+(filled?'18px':'0')+';background:transparent;padding-right:28px"'
    +' onchange="'+onch+'">'
    +options.map(o=>'<option value="'+o.v+'"'+(value===o.v?' selected':'')+'>'+o.l+'</option>').join('')
    +'</select>'
    +'</div>'
    +'<span style="pointer-events:none;position:absolute;right:12px;top:50%;transform:translateY(-50%)">'
    +'<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    +'</span>'
    +'</div></div>';
}
window.DSSelect=DSSelect;

/** Badge — pill de status */
function DSBadge(text,tone){
  // tone: 'green'|'yellow'|'red'|'muted'
  return '<span class="badge badge-'+tone+'">'+text+'</span>';
}
window.DSBadge=DSBadge;

/** InfoCard — card com ícone + texto + chevron opcional */
function DSInfoCard(opts){
  const {icon,title,subtitle,iconBg=DS.color.successBg,chevron=false}=opts;
  return '<div style="padding:16px;border-radius:var(--radius-xl);background:'+iconBg+';border:1px solid var(--clr-border-light);display:flex;align-items:center;gap:12px">'
    +'<div style="width:40px;height:40px;border-radius:var(--radius-lg);background:rgba(255,255,255,.6);display:flex;align-items:center;justify-content:center;flex-shrink:0">'+icon+'</div>'
    +'<div style="flex:1"><div style="color:var(--clr-primary);font-size:13px;font-weight:600">'+title+'</div>'+(subtitle?'<div style="color:var(--clr-ink-2);font-size:12px;margin-top:4px;line-height:1.4">'+subtitle+'</div>':'')+'</div>'
    +(chevron?'<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="'+DS.color.success+'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>':'')
    +'</div>';
}
window.DSInfoCard=DSInfoCard;

/** SectionDivider — linha com título */
function DSSdiv(label){
  return '<div class="sdiv"><span>'+label+'</span></div>';
}
window.DSSdiv=DSSdiv;

/** BottomBar genérico — recebe HTML interno pronto */
function DSBottomBar(innerHtml){
  return '<div class="bottom-bar">'+innerHtml+'</div>';
}
window.DSBottomBar=DSBottomBar;



// ═══ STEPPER DS ══════════════════════════════════════════════

/** Renderiza o círculo de estado de uma etapa */
function _dsStepCircle(state, iconActive, iconInactive, cls){
  const ic = state==='inactive' ? iconInactive : iconActive;
  const check='<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.2 3.8 9.8-8.8" stroke="#D4D92E" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  return '<div class="ds-step-circle '+state+' '+(cls||'')+'">'+(state==='done'?check:ic)+'</div>';
}

/**
 * StepperMobile — versão mobile-first (padrão do produto)
 * @param {Array} steps - [{iconActive, iconInactive, label, title}]
 * @param {number} currentStep - 1-based
 */
function DSStepperMobile(steps, currentStep){
  let h='<div class="ds-stepper ds-stepper-mobile">';
  steps.forEach(function(step,i){
    const n=i+1, state=n<currentStep?'done':n===currentStep?'active':'inactive';
    const lc=state==='inactive'?'#9CA3AF':'#2D6A4F';
    const tc=state==='active'?'#161A18':state==='done'?'#374151':'#9CA3AF';
    const tw=state==='active'?'700':'500';
    h+='<div class="ds-step">';
    h+=_dsStepCircle(state,step.iconActive,step.iconInactive);
    h+='<span class="ds-step-label" style="color:'+lc+'">'+step.label+'</span>';
    h+='<span class="ds-step-title" style="color:'+tc+';font-weight:'+tw+'">'+step.title+'</span>';
    h+='</div>';
    if(i<steps.length-1){
      const lnc=state==='done'?'#2D6A4F':'#E5E7EB';
      h+='<div class="ds-connector" style="background:'+lnc+'"></div>';
    }
  });
  h+='</div>';
  return h;
}
window.DSStepperMobile=DSStepperMobile;

/**
 * StepperWeb — versão desktop, distribuição expandida
 * @param {Array} steps - [{iconActive, iconInactive, label, title}]
 * @param {number} currentStep - 1-based
 */
function DSStepperWeb(steps, currentStep){
  let h='<div class="ds-stepper ds-stepper-web">';
  steps.forEach(function(step,i){
    const n=i+1, state=n<currentStep?'done':n===currentStep?'active':'inactive';
    const lc=state==='inactive'?'#9CA3AF':'#2D6A4F';
    const tc=state==='active'?'#161A18':state==='done'?'#374151':'#9CA3AF';
    const tw=state==='active'?'700':'500';
    h+='<div class="ds-step">';
    h+=_dsStepCircle(state,step.iconActive,step.iconInactive);
    h+='<span class="ds-step-label" style="color:'+lc+'">'+step.label+'</span>';
    h+='<span class="ds-step-title" style="color:'+tc+';font-weight:'+tw+'">'+step.title+'</span>';
    h+='</div>';
    if(i<steps.length-1){
      const lnc=state==='done'?'#2D6A4F':'#E5E7EB';
      h+='<div class="ds-connector" style="flex:1;background:'+lnc+'"></div>';
    }
  });
  h+='</div>';
  return h;
}
window.DSStepperWeb=DSStepperWeb;
console.log('[VEGA DS] v1.0 carregado ✓');
