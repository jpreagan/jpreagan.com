/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import { getColor } from "@theme-ui/color"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  AiFillLinkedin as LinkedIn,
  AiOutlineTwitter as Twitter,
  AiFillGithub as GitHub,
} from "react-icons/ai"

const Intro = () => {
  const data = useStaticQuery(graphql`
    query IntroQuery {
      site {
        siteMetadata {
          author
          social {
            twitter
            linkedin
            github
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <section
      sx={{
        mt: [5, 6, 6],
        mb: 6,
      }}
    >
      <div
        sx={{
          display: "flex",
          flexDirection: ["column", "column", "row"],
        }}
      >
        <div>
          <p>
            <span
              sx={{
                fontSize: 6,
                color: "heading",
                fontFamily: "heading",
                fontWeight: "heading",
                letterSpacing: "-0.015em",
                lineHeight: 1,
              }}
            >
              Aloha, I'm
            </span>
            <br />
            <span
              sx={{
                fontSize: 6,
                color: "transparent",
                backgroundClip: "text",
                backgroundImage: theme => `
              linear-gradient(
                to right,
                ${getColor(theme, "#67e8f9")},
                ${getColor(theme, "#6366f1")},
                ${getColor(theme, "#e879f9")}
              )
            `,
                fontFamily: "heading",
                fontWeight: "heading",
                letterSpacing: "-0.015em",
                lineHeight: 1,
              }}
            >
              James Reagan
            </span>
          </p>
          <p>💻 I'm a software engineer 🌴 living in Hawaiʻi.</p>
          <p>💕 Lover of 80's love songs and 🍜 udon noodles!</p>
        </div>
        <StaticImage
          src="../images/profile_pic.jpeg"
          alt={author}
          loading="eager"
          layout="fixed"
          width={200}
          height={200}
          placeholder="blurred"
          formats={["auto", "webp", "avif"]}
          quality={90}
          style={{ minWidth: "200px" }}
          imgStyle={{ borderRadius: "100%" }}
        />
      </div>
      <div
        sx={{
          display: "flex",
          gap: "0.125rem",
          margin: ["1rem auto", "1rem auto", 0],
        }}
      >
        <Link
          href={social?.twitter}
          rel="noreferrer"
          target="_blank"
          variant="social"
          sx={{ color: "currentColor" }}
        >
          <Twitter size={40} title="Twitter" />
        </Link>
        <Link
          href={social?.linkedin}
          rel="noreferrer"
          target="_blank"
          variant="social"
          sx={{ color: "currentColor" }}
        >
          <LinkedIn size={40} title="LinkedIn" />
        </Link>
        <Link
          href={social?.github}
          rel="noreferrer"
          target="_blank"
          variant="social"
          sx={{ color: "currentColor" }}
        >
          <GitHub size={40} title="GitHub" />
        </Link>
      </div>
    </section>
  )
}

export default Intro
