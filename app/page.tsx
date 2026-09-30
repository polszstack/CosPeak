import Image from "next/image";
import { cosmicIdeas, universeStats } from "@/lib/cosmic-data";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="heroBackdrop" />
        <div className="heroInner">
          <p className="eyebrow">CosPeak Universe Lab</p>
          <h1>How the universe works, from the first light to living worlds.</h1>
          <p className="heroCopy">
            Explore the engines behind space: gravity, galaxies, stars, dark matter, cosmic expansion,
            exoplanets, and the facts that make the cosmos feel wildly alive.
          </p>
          <div className="heroActions" aria-label="Page sections">
            <a href="#ideas">Explore ideas</a>
            <a href="#database">MySQL ready</a>
          </div>
        </div>
      </section>

      <section className="statBand" aria-label="Universe quick stats">
        {universeStats.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="sectionIntro" id="ideas">
        <p className="eyebrow">Showcase</p>
        <h2>Big cosmic ideas, explained visually</h2>
        <p>
          Each feature includes a picture, an approachable explanation, and a quick trivia spark
          for curious minds.
        </p>
      </section>

      <section className="ideaGrid" aria-label="Cosmic ideas">
        {cosmicIdeas.map((idea) => (
          <article className="ideaCard" key={idea.title}>
            <div className="imageWrap">
              <Image src={idea.image} alt={idea.alt} fill sizes="(max-width: 760px) 100vw, 33vw" />
            </div>
            <div className="ideaBody">
              <div className="ideaMeta">
                <span>{idea.category}</span>
                <span>{idea.scale}</span>
              </div>
              <h3>{idea.title}</h3>
              <p>{idea.description}</p>
              <div className="factBox">
                <span>Trivia</span>
                <p>{idea.trivia}</p>
              </div>
              <div className="ideaBox">
                <span>Try this idea</span>
                <p>{idea.experiment}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="timeline" aria-label="Universe timeline">
        <div>
          <p className="eyebrow">Cosmic timeline</p>
          <h2>From hot beginning to complex structure</h2>
        </div>
        <ol>
          <li>
            <strong>13.8 billion years ago</strong>
            <span>The early universe expands and cools from an extremely hot, dense state.</span>
          </li>
          <li>
            <strong>380,000 years later</strong>
            <span>Atoms form and light can finally travel freely: the cosmic microwave background.</span>
          </li>
          <li>
            <strong>Hundreds of millions of years</strong>
            <span>The first stars ignite, forge heavier elements, and seed future galaxies.</span>
          </li>
          <li>
            <strong>Today</strong>
            <span>Expansion continues while gravity gathers matter into galaxies, stars, and planets.</span>
          </li>
        </ol>
      </section>

      <section className="database" id="database">
        <div>
          <p className="eyebrow">Built for data</p>
          <h2>Optional MySQL model</h2>
        </div>
        <p>
          The showcase currently runs from local React data so it works anywhere. When you want
          admin editing or user-submitted facts, use the included <code>db/schema.sql</code> and
          <code> lib/mysql.ts</code> starter to store the same cards in MySQL.
        </p>
      </section>
    </main>
  );
}
