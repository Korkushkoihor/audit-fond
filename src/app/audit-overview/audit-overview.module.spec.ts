import { AuditOverviewModule } from './audit-overview.module';

describe('AuditOverviewModule', () => {
  let auditOverviewModule: AuditOverviewModule;

  beforeEach(() => {
    auditOverviewModule = new AuditOverviewModule();
  });

  it('should create an instance', () => {
    expect(auditOverviewModule).toBeTruthy();
  });
});
