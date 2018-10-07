import { action, observable } from 'mobx';
import { DEFAULT_PROJECT_NAME } from 'src/model/ProjectsStore';

export const DEFAULT_SESSION_DURATION = 1;

export class SettingsStore {
    @observable
    private sessionDuration: number = DEFAULT_SESSION_DURATION;

    @observable
    private defaultProject: string = DEFAULT_PROJECT_NAME;

    public getSessionDuration() {
        return this.sessionDuration;
    }

    @action
    public setSessionDuration(minutes: number) {
        this.sessionDuration = minutes;
    }

    public getDefaultProject() {
        return this.defaultProject;
    }
}

export const settingsStore = new SettingsStore();
