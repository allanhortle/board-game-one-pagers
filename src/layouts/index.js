import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet';
import {Window, WindowTitle, WindowContent} from 'goose-css';
import { Container } from 'react-responsive-grid';
import '../style/screen.scss';

class Template extends React.Component {
  render() {
    const {children} = this.props

    return <Window>
        <Helmet defaultTitle="Board Game One Pagers" titleTemplate="%s - Board Game One Pagers">
            <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i,500" rel="stylesheet" />
        </Helmet>
        {children()}
    </Window>;
  }
}

export default Template
