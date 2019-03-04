# Datacenter Activity

Recreating a layout designed in a graphics application in code. This is an exercise to hone my base skills in HTML & CSS.

## Progress Log

**Continuing Pinegrow layout: 27/02/19 1h 30mins**

I think initially the laying out process worked well, in that I could see a layout structure quite quickly.

I created a set of Type classes which I could then apply to text divs. This helps in fleshing out the layout better.

The pain point was then in removing the scaffold structure and keeping the nesting where I needed it. At first it felt like I was treading water.
But once I kept on and pushed through that, the layout came to life and looked more like the final product.

I have come to the conclusion that I need to have a pattern of separating elements into different groups:

- layout / grids
- components

There is still a challenge in naming components. I think I need names for more contexts, such as charts and data.

---

**Dealing with seemingly random occourences: 03/03/19 10mins**

The struggle here was thinking on how to approach naming divs.

Taking a step back, I needed to identify what the differeneces were. Once those had been identified I found the solution.

The difference here was the borders on grid items. So my solution was to add a modifier class to the panel-grid__item div that will
the add the borders that are needed.

---

**Extracting CSS Colors and Typography: 27/02/19 1h 40mins**

This was pretty straight forward. Where the challenge lay was in setting the type sizes and variables.

I have mangaged to use a naming convention which will enable me to use 9 variations.

What sucked was that I had to go through the chore of manually creating the line-height and then the css type classes.

---

**Creating the layout in Pinegrow: 26/02/19 1h**

Created the initial layout in Pinegrow.
  
