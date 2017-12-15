import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet';
import {Window, WindowTitle, WindowContent} from 'goose-css';
import { Container } from 'react-responsive-grid';
import '../style/screen.scss';
{/*<link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i,500" rel="stylesheet">*/}
class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Gatsby Starter Blog
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Gatsby Starter Blog
          </Link>
        </h3>
      )
    }
    return <Window>
        <Helmet defaultTitle="Board Game One Pagers" titleTemplate="%s - Board Game One Pagers">
            <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i,500" rel="stylesheet" />
        </Helmet>
        {children()}
    </Window>;
  }
}

export default Template
