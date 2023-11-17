import Image from "next/image";
import styles from "./styles.module.css";
import classNames from "classnames";

export const NewFilm = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.new_film_title} data-lang-key="mandalorian-season">
        Mandalorian season 4
      </h1>
      <div className={styles.image_wrapper}>
        <Image
          src="/Poster2.png"
          priority
          fill={true}
          alt="Poster"
          className={styles.image}
        />
      </div>
      <table className={styles.info}>
        <tbody>
          <tr className={styles.new_film_date}>
            <td data-lang-key="when-released">When will it be released:</td>
            <td data-lang-key="release-date">December 12, 2023</td>
          </tr>
          <tr>
            <td
              colSpan={2}
              className={styles.time_title}
              data-lang-key="until-release"
            >
              Until the release remains:
            </td>
          </tr>
          <tr>
            <td
              colSpan={2}
              className={classNames(styles.time_left, styles.timer)}
            >
              <span data-lang-key="days-left">Days:</span>
              <span className={styles.days_left}></span>
              <span data-lang-key="hours-left">Hours:</span>
              <span className={styles.hours_left}></span>
              <span data-lang-key="minutes-left">Minutes:</span>
              <span className={styles.minutes_left}></span>
              <span data-lang-key="seconds-left">Seconds:</span>
              <span className={styles.seconds_left}></span>
            </td>
          </tr>
          <tr>
            <td data-lang-key="original-name">Original name:</td>
            <td data-lang-key="mandalorian">The mandalorian</td>
          </tr>
          <tr>
            <td data-lang-key="country-colon">Country:</td>
            <td data-lang-key="usa">USA</td>
          </tr>
          <tr>
            <td data-lang-key="channel">Channel:</td>
            <td data-lang-key="disney">Disney+</td>
          </tr>
          <tr>
            <td data-lang-key="genre-colon">Genre:</td>
            <td data-lang-key="genre-info">action, science fiction</td>
          </tr>
          <tr>
            <td data-lang-key="episodes-count">Number of episodes:</td>
            <td>8</td>
          </tr>
          <tr>
            <td data-lang-key="actors">The actors:</td>
            <td data-lang-key="actors-info">
              Pedro Pascal, Giancarlo Esposito, Ming-Na Wen, Kathy Sackhoff
            </td>
          </tr>
          <tr>
            <td data-lang-key="duration">Duration:</td>
            <td data-lang-key="45-min">45 min.</td>
          </tr>
          <tr>
            <td data-lang-key="ratings">Ratings:</td>
            <td data-lang-key="ratings-info">imdb 8.8, kinopoisk 8.0</td>
          </tr>
        </tbody>
      </table>
      <p data-lang-key="text-mandalorian-paragraph1">
        The Star Wars universe is developing rapidly. The success of the
        Mandalorian series allowed Disney+ to announce a lot more projects, and
        in the meantime, viewers are looking forward to the continuation of the
        story about Dean Jarin, a bounty hunter who is used to working alone,
        but increasingly entering into alliances with other characters. Viewers
        could already watch two seasons, but even before the premiere of the
        third, Disney Studio announced season 4 of Mandalorian, the release date
        of all episodes will take place in December 2023. The actors have long
        told in their social networks that the project has received a fourth
        season.
      </p>
      <p data-lang-key="text-mandalorian-paragraph2">
        Immediately after the end of the second season, Disney presented
        information about the new show of the Star Wars universe. Many people
        thought that this was the announcement of the third season, but later
        the authors gave an explanation – a separate series called the Book of
        Boba Fett was announced, it is connected with the Mandalorian, but is a
        separate project. According to preliminary data, the release date of the
        4th season of the Mandalorian series will take place in December 2023,
        it will begin to be shown after the release of the show about Boba Fett.
      </p>
      <div className={styles.image_wrapper}>
        <Image
          src="/Poster.png"
          priority
          fill={true}
          alt="Poster"
          className={styles.image}
        />
      </div>
      <h2 data-lang-key="plot">The plot of the film</h2>
      <p
        data-lang-key="text-mandalorian-paragraph3"
        className={styles.last_paragraph}
      >
        The fourth season of the Mandalorian will be a direct continuation of
        the third. While it is difficult to assume that it will be shown,
        because at least a year is still before the release, but Giancarlo
        Esposito hinted that his tie began in the second season, which has
        already been released. The audience saw that Dean Jarino faced a
        difficult task – he may have to manage an entire planet freed from the
        power of the Empire. Will the hero, accustomed to freedom, agree to
        settle down, will be shown in new episodes. The release date of the 4th
        season of Mandalorian will be approximately December 12, 2022. However,
        the timing may shift if events in it are influenced by other stories
        unfolding in the Star Wars universe. The fourth season will not only
        show whether Dean Jarino will become a settled warrior, but can also
        bring back little Yoda. He fell in love with the audience back in the
        first season, but the second showed that the future Jedi master was
        taken away, since he is not safe with a mercenary wanted throughout the
        universe. However, the Mandalorian himself is used to his young
        companion and may want to continue traveling with him. Viewers expect to
        see the return of Yoda in season 4, but given that upcoming events do
        not involve new adventures of the hero in space, this may happen later.
        We will find out if this is the case after the release date of season 4.
      </p>
    </div>
  );
};
