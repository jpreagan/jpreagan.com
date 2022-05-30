/** @jsx jsx */
import { jsx } from "theme-ui"
import { getColor } from "@theme-ui/color"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Intro = () => {
  const data = useStaticQuery(graphql`
    query IntroQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author

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
                ${getColor(theme, "primary")},
                ${getColor(theme, "secondary")}
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
    </section>
  )
}

export default Intro
