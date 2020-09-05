import * as React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/projects/Projects';
import { Contact } from './components/Contact';
import { HOME, ABOUT_ME, PROJECTS, CONTACT } from './routing/WebRouting';

import './custom.css'

export default class App extends React.Component {
    render () {
        return (
            <Layout>
                <Route exact path={HOME} component={Home} />
                <Route path={ABOUT_ME} component={AboutMe} />
                <Route path={PROJECTS} component={Projects} />
                <Route path={CONTACT} component={Contact} />
            </Layout>
        );
    }
}
