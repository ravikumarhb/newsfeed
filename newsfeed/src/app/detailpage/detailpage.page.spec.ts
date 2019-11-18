import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { RouterTestingModule } from "@angular/router/testing";

import { DetailpagePage } from "./detailpage.page";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

describe("DetailpagePage", () => {
  let component: DetailpagePage;
  let fixture: ComponentFixture<DetailpagePage>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailpagePage],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // it("should be empty at first", () => {
  //   // var titleEl = fixture.debugElement.query(By.css("#title")).nativeElement
  //   //   .textContent;
  //   expect(
  //     fixture.debugElement.nativeElement.querySelector(".lblhead").textContent
  //   ).toBeNull();
  // });
});
