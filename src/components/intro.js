/** @jsx jsx */
import { jsx } from "theme-ui"
import { getColor } from "@theme-ui/color"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "theme-ui"
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
            <br />a software engineer in Hawaiʻi.
          </p>
          <p>
            I build{" "}
            <span sx={{ color: "heading", fontWeight: "bold" }}>
              accessible
            </span>{" "}
            and{" "}
            <span sx={{ color: "heading", fontWeight: "bold" }}>
              performant
            </span>{" "}
            web applications in JavaScript.
          </p>
        </div>
        <StaticImage
          src="../images/profile_pic.jpeg"
          alt={{ author }}
          loading="eager"
          layout="fixed"
          width={200}
          height={200}
          placeholder="blurred"
          formats={["auto", "webp", "avif"]}
          quality={90}
          imgStyle={{ borderRadius: "100%" }}
        />
      </div>
      <div sx={{ display: "flex", gap: "0.125rem", marginTop: [3, 0, 0] }}>
        <Link
          href={social?.twitter}
          rel="noreferrer"
          target="_blank"
          variant="social"
          sx={{ color: "currentColor" }}
        >
          <Twitter size={40} />
        </Link>
        <Link
          href={social?.linkedin}
          rel="noreferrer"
          target="_blank"
          variant="social"
          sx={{ color: "currentColor" }}
        >
          <LinkedIn size={40} />
        </Link>
        <Link
          href={social?.github}
          rel="noreferrer"
          target="_blank"
          variant="social"
          sx={{ color: "currentColor" }}
        >
          <GitHub size={40} />
        </Link>
      </div>
    </section>
  )
}

export default Intro
