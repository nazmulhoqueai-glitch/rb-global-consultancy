# Gallery Images

This folder contains achievement images for the Gallery page.

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Recommended Size**: 1200x900px (4:3 aspect ratio)
- **File Naming**: Use descriptive names like `achievement1.jpg`, `award-2024.jpg`, etc.

## Current Images Needed

The Gallery page is configured to display 6 images:
1. `achievement1.jpg` - Excellence in Visa Services 2024
2. `achievement2.jpg` - ISO Certification Achievement
3. `achievement3.jpg` - 1000+ Successful Visa Applications
4. `achievement4.jpg` - Best Immigration Consultant
5. `achievement5.jpg` - Annual Client Appreciation Event
6. `achievement6.jpg` - Government Accreditation

## Adding More Images

To add more images:
1. Place your image files in this folder
2. Edit `app/gallery/page.tsx`
3. Add new entries to the `galleryData` array with:
   - Unique `id`
   - `category` (Awards, Certifications, Milestones, or Events)
   - `title`
   - `image` path
   - `date`
   - `description`

## Categories

- **Awards**: Recognition and awards received
- **Certifications**: Professional certifications and accreditations
- **Milestones**: Company achievements and milestones
- **Events**: Company events and celebrations

