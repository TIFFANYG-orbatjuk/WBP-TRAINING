
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState("de");
  const [sendCopy, setSendCopy] = useState(false);

  const languages = {
    de: {
      heroTitle: "Deine Zukunft beginnt jetzt",
      heroText: "Sprachkurse • Coaching • Sicherheit • Jobvermittlung",
      heroButton: "Jetzt kostenlos beraten lassen",
      form: {
        name: "Name",
        message: "Nachricht",
        sendCopy: "Eine Kopie der E-Mail an mich senden",
        submit: "Absenden"
      }
    }
  };

  const t = languages[language];

  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <Head>
        <title>WBP Training</title>
      </Head>
      <h1>{t.heroTitle}</h1>
      <p>{t.heroText}</p>
      <button>{t.heroButton}</button>
      <div style={{ marginTop: 32 }}>
        <input type="text" placeholder={t.form.name} /><br /><br />
        <textarea placeholder={t.form.message}></textarea><br /><br />
        <label>
          <input type="checkbox" checked={sendCopy} onChange={() => setSendCopy(!sendCopy)} />
          {t.form.sendCopy}
        </label><br /><br />
        <button>{t.form.submit}</button>
      </div>
    </div>
  );
}
    