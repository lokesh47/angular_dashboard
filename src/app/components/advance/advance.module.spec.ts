import { AdvanceModule } from './advance.module';

describe('AdvanceModule', () => {
  let advanceModule: AdvanceModule;

  beforeEach(() => {
    advanceModule = new AdvanceModule();
  });

  it('should create an instance', () => {
    expect(advanceModule).toBeTruthy();
  });
});
