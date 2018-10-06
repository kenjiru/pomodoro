import { action, observable } from 'mobx';

export const DEFAULT_SESSION_DURATION = 1;

export class SettingsStore {
    @observable
    private sessionDuration: number = DEFAULT_SESSION_DURATION;

    @action
    public getSessionDuration() {
        return this.sessionDuration;
    }

    @action
    public setSessionDuration(minutes: number) {
        this.sessionDuration = minutes;
    }
}

export const settingsStore = new SettingsStore();
