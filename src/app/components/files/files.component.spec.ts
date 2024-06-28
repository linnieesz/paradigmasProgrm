import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilesComponent } from './files.component';


describe('RegisterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        FilesComponent
      ],
    }).compileComponents();
  });

  it('should create the register', () => {
    const fixture = TestBed.createComponent(FilesComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
