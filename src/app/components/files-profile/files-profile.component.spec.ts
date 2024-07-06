import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilesProfileComponent } from './files-profile.component';



describe('RegisterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        FilesProfileComponent
      ],
    }).compileComponents();
  });

  it('should create the register', () => {
    const fixture = TestBed.createComponent(FilesProfileComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
