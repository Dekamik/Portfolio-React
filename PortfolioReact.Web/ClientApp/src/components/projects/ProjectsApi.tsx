import { API_PROJECTS } from '../../routing/ApiRouting';
import { Api } from '../../helpers/Api';
import { IProject } from './IProject';

export class ProjectsApi extends Api {
    getProjects(success: (data: IProject[]) => void, error?: (message) => void, final?: () => void) {
        this.get(API_PROJECTS, success, error, final);
    }
}