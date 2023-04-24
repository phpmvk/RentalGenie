import { Component, OnInit } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiClientService } from 'src/app/api-client.service';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {
  images: string[] = [];
  selectedImages: File[] = [];

  formSubmissionFolder!: string;

  addListingForm!: FormGroup;

  weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  constructor(
    private fb: FormBuilder,
    private api: ApiClientService,
    private storage: Storage,
    ) {
    this.addListingForm = this.fb.group({
      agency_id: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required], //
      district: ['', Validators.required], //
      post_code: ['', Validators.required],
      owner_name: ['', Validators.required],
      owner_contact: ['', Validators.required],
      size: [null],
      bedrooms: [null],
      bathrooms: [null],
      header: ['', Validators.required], //
      description: ['', Validators.required],
      rent_amount: [null, Validators.required],
      showing_weekdays: new FormGroup({
        Monday: new FormControl(false),
        Tuesday: new FormControl(false),
        Wednesday: new FormControl(false),
        Thursday: new FormControl(false),
        Friday: new FormControl(false),
      }),
      showing_hours: ['', Validators.required],
      available: [true],
      tenant_requirements: ['', Validators.required],
      image: [null, Validators.required],
      furnished: [false],
      floor: [null, Validators.required],
      pets_allowed: [false],
      parking_spots: [null, Validators.required],
      close_to_public_transport: [false],
    });
  }

  ngOnInit(): void {
    this.formSubmissionFolder = `${Date.now()}`;
    this.getImages()
  }

  async onSubmit() {
    const selectedDays = this.weekdays.filter(day => this.addListingForm.value.showing_weekdays[day]);
    this.addListingForm.patchValue({showing_weekdays: selectedDays});
    const newListing = this.addListingForm.value
    const showingDays = this.addListingForm.value.showing_weekdays
    const showingDaysArray = []
    for (let day in showingDays) {
      if (showingDays[day] === true) showingDaysArray.push(day)
    }
    newListing.showing_weekdays = showingDaysArray

    //upload images and get URLs
    const imageUrls: string[] = [];
    for (let i = 0; i < this.selectedImages.length; i++) {
      const file = this.selectedImages[i];
      const imgRef = ref(this.storage, `image/${this.formSubmissionFolder}/${file.name}`);
      await uploadBytes(imgRef, file);
      const url = await getDownloadURL(imgRef);
      imageUrls.push(url);
    }
    
    //add iamge URLs to the newListing object
    newListing.images = imageUrls;

    //send form to backend
    this.api.postNewListing(newListing).subscribe(res => console.log(res))
    this.addListingForm.reset();
    this.formSubmissionFolder = `${Date.now()}` // this makes sure that if someone doesn't leave the page before uploading another listing, they still create a new folder in Firebase
    this.selectedImages = []; //reset this so that new submissions don't have the old images
  }

  imageUpload($event: any) {
    const files = $event.target.files
    console.log(files)
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      this.selectedImages.push(file);
      const imgRef = ref(this.storage, `image/${this.formSubmissionFolder}/${file.name}`);
      uploadBytes(imgRef, file).then(res => {
        console.log(res);
        this.getImages();
      }).catch(err => console.error(err));
    }
  }

  getImages() {
    const imagesRef = ref(this.storage, `images/${this.formSubmissionFolder}`);
    listAll(imagesRef).then(async res => {
      this.images = [];
      for(let image of res.items) {
        const url = await getDownloadURL(image)
        this.images.push(url)
      }
    }).catch(err => console.error(err))
  };
}
