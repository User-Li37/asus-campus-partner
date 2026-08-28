import { useEffect, useState } from 'react'
import logo from './assets/logo.png'
import hero from './assets/hero.jpg'
import joinQr from './assets/qr/join-qr.jpg'
import qqGroupQr from './assets/qr/qq-group-qr.png'

// 自动收集 src/assets/activities/ 下的所有图片，放入文件夹即自动显示
const activityPhotos = import.meta.glob('./assets/activities/*.{jpg,jpeg,png,webp,gif}', {
  eager: true,
  import: 'default',
})

/* ---------- 数据 ---------- */
const benefits = [
  { icon: '🎁', title: '外设体验', desc: '华硕外设 第一时间上手评测。' },
  { icon: '📄', title: '官方实践证明', desc: '完成任期即可获得华硕校园项目实习证明，为简历加分。' },
  { icon: '🧠', title: '成长培训', desc: '产品培训、运营技能、职场软实力，官方导师带你成长。' },
  { icon: '💰', title: '项目奖励', desc: '完成任务可获得佣金、周边礼包与内推机会。' },
  { icon: '🎪', title: '大型活动参与', desc: '华硕新品发布会、电竞赛事等大型活动的参与机会。' },
  { icon: '👯', title: '志同道合的伙伴', desc: '认识一群同样热爱科技与创意的青大同学。' },
]

const timeline = [
  { step: '01', title: '投递报名', desc: '填写下方报名表，加入招新群' },
  { step: '02', title: '面试面谈', desc: '轻松聊聊，认识彼此' },
  { step: '03', title: '录取通知', desc: '通过后拉入正式群，开启旅程' },
  { step: '04', title: '新人培训', desc: '官方培训 + 老带新，快速上手' },
]

const activities = [
  { emoji: '🎮', title: '电竞观赛夜', desc: 'ROG 战队比赛线下观赛，一起呐喊' },
  { emoji: '🖥️', title: '新品体验会', desc: '天选 / ROG 系列真机上手体验' },
  { emoji: '🔧', title: '装机工坊', desc: '从零组装一台电脑，硬核教学' },
  { emoji: '🎨', title: '创意设计赛', desc: '海报 / 视频创作，赢华硕周边' },
]

/* ---------- 组件 ---------- */

function Nav() {
  const links = ['关于我们', '加入福利', '招新流程', '活动回顾', '社团活动']
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand">
          <img className="brand-logo-img" src={logo} alt="华硕校园合伙人 logo" />
          <span className="brand-text">华硕校园合伙人</span>
        </a>
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l} href={`#${l}`}>{l}</a>
          ))}
        </nav>
        <a href="#join" className="btn btn-sm nav-cta">立即报名</a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />
      <div className="hero-inner">
        <span className="hero-badge">🎓 青岛大学 · 华硕校园合伙人</span>
        <h1 className="hero-title">
          华硕校园合伙人
          <span className="hero-title-sub">招募新同学啦</span>
        </h1>
        <p className="hero-desc">
          和一群热爱科技与创意的伙伴，一起办活动、玩新品、搞内容。
          <br />
          无论你会不会技术，只要你有热情，这里就有你的位置。
        </p>
        <div className="hero-actions">
          <a href="#join" className="btn btn-primary">🚀 立即报名加入</a>
          <a href="#about" className="btn btn-ghost">了解我们 ↓</a>
        </div>
        <div className="hero-stats">
          <div className="stat"><b>10+</b><span>场活动/学期</span></div>
          <div className="stat"><b>100+</b><span>往届成员</span></div>
        </div>
        <div className="hero-img-wrap">
          <img className="hero-img" src={hero} alt="华硕校园合伙人" />
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="关于我们">
      <div className="section-head">
        <h2>关于我们</h2>
        <p>我们是谁，在做什么</p>
      </div>
      <div className="about-grid">
        <div className="about-card">
          <h3>🏫 扎根青大</h3>
          <p>华硕校园合伙人是华硕官方发起的校园团队。在青岛大学，我们是一支覆盖多院系的学生组织，连接华硕品牌与校园生活。</p>
        </div>
        <div className="about-card">
          <h3>⚡ 玩转科技</h3>
          <p>我们不是普通的社团——新品体验、装机评测、电竞观赛、创意内容，都是我们的日常。让科技变得好玩，是我们最大的乐趣。</p>
        </div>
        <div className="about-card">
          <h3>🌱 一起成长</h3>
          <p>无论你是大一还是大二，都能在这里找到舞台。官方培训 + 学长学姐带教，收获技能、朋友和实践经历。</p>
        </div>
      </div>
    </section>
  )
}

function Benefits() {
  return (
    <section className="section" id="加入福利">
      <div className="section-head">
        <h2>加入福利</h2>
        <p>你将会获得什么</p>
      </div>
      <div className="benefit-grid">
        {benefits.map((b) => (
          <div className="benefit-card" key={b.title}>
            <div className="benefit-icon">{b.icon}</div>
            <h3>{b.title}</h3>
            <p>{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Timeline() {
  return (
    <section className="section section-alt" id="招新流程">
      <div className="section-head">
        <h2>招新流程</h2>
        <p>四步，轻松加入</p>
      </div>
      <div className="timeline">
        {timeline.map((t) => (
          <div className="timeline-item" key={t.step}>
            <div className="timeline-step">{t.step}</div>
            <h3>{t.title}</h3>
            <p>{t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Activities() {
  return (
    <section className="section" id="活动回顾">
      <div className="section-head">
        <h2>活动回顾</h2>
        <p>我们的日常，比想象中更精彩</p>
      </div>
      <div className="act-grid">
        {activities.map((a) => (
          <div className="act-card" key={a.title}>
            <div className="act-emoji">{a.emoji}</div>
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ClubActivities() {
  const photos = Object.values(activityPhotos)
  const [lightbox, setLightbox] = useState(null) // 当前预览照片的索引

  const close = () => setLightbox(null)
  const prev = () => setLightbox((lightbox - 1 + photos.length) % photos.length)
  const next = () => setLightbox((lightbox + 1) % photos.length)

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, photos.length])

  return (
    <section className="section" id="社团活动">
      <div className="section-head">
        <h2>社团活动</h2>
        <p>用照片记录我们的每一次相聚</p>
      </div>

      {photos.length === 0 ? (
        <div className="photos-empty">
          <span className="photos-empty-icon">🖼️</span>
          <p>照片墙待填充</p>
          <p className="photos-empty-hint">
            把照片放进 <code>src/assets/activities/</code> 文件夹即可自动显示
          </p>
        </div>
      ) : (
        <div className="photos-grid">
          {photos.map((src, i) => (
            <div className="photo-card" key={src} onClick={() => setLightbox(i)}>
              <img src={src} alt={`社团活动照片 ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      )}

      {lightbox !== null && (
        <div className="lightbox" onClick={close}>
          <button className="lightbox-close" onClick={close} aria-label="关闭">✕</button>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); prev() }} aria-label="上一张">‹</button>
          <img
            className="lightbox-img"
            src={photos[lightbox]}
            alt={`社团活动照片 ${lightbox + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); next() }} aria-label="下一张">›</button>
          <span className="lightbox-count">{lightbox + 1} / {photos.length}</span>
        </div>
      )}
    </section>
  )
}

function JoinQR() {
  return (
    <section className="section section-alt join" id="join">
      <div className="section-head">
        <h2>报名加入</h2>
        <p>扫码填写报名表，或加入招新 QQ 群与我们联系</p>
      </div>
      <div className="join-qr-row">
        <div className="join-qr-card">
          <img className="join-qr-img" src={joinQr} alt="报名表二维码" />
          <p className="join-qr-tip">长按或扫描二维码，填写报名表</p>
        </div>
        <div className="join-qr-card">
          <img className="join-qr-img" src={qqGroupQr} alt="招新 QQ 群二维码" />
          <p className="join-qr-tip">长按或扫描二维码，加入招新 QQ 群</p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img className="brand-logo-img" src={logo} alt="华硕校园合伙人 logo" />
          <span>华硕校园合伙人 · 青岛大学</span>
        </div>
        <p>一起玩转科技与创意 🚀</p>
        <p className="footer-note">© {new Date().getFullYear()} 华硕校园合伙人 · 青岛大学团队</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Benefits />
      <Timeline />
      <Activities />
      <ClubActivities />
      <JoinQR />
      <Footer />
    </>
  )
}