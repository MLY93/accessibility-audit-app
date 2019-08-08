const sectionsArray = [
  {
    heading: "Valid HTML",
    item: "multiple items",
    status: "required",
    subCategories: [
      {
        heading:
          "Semantic elements have been used unless absolutely necessary to use a non-semantic element"
      },
      {
        heading:
          "Where non-semantic elements have been used, these elements have been given a role, a logical place in the tabIndex, defined event handlers for Click and Keydown including enter and space keys."
      },
      {
        heading: "Valid DOM Nesting has been upheld"
      }
    ]
  },
  {
    heading: "Buttons, Anchors, and Labels",
    item: "multiple items",
    status: "required",
    subCategories: [
      {
        heading:
          "Buttons, anchors, or labels HAVE NOT been given content such as 'click here' or 'read more'"
      },
      {
        heading:
          "All buttons, anchors, and labels are given proper context such as 'show more focus areas'"
      },
      {
        heading:
          "Where an icon has been used, a proper aria-label has been attributed"
      }
    ]
  },
  {
    heading: "Landmark Regions",
    item: "multiple items",
    status: "required",
    subCategories: [
      {
        heading:
          "Landmark regions have been given to communicate the layout of a page to the Screenreader"
      },
      {
        heading:
          "Use 'nav' role to wrap navigation, use 'main' role to indicate the primary content of a page etc. These will also populate the rotor which is another way for users to navigate"
      },
      {
        heading:
          "Any custom form controls have been given a role e.g. a share button or star rating"
      }
    ]
  },
  {
    heading: "Focus",
    item: "multiple items",
    status: "required",
    subCategories: [
      { heading: "A logical tab order has been maintained" },
      {
        heading:
          "Focus is sufficiently visible- A person navigating with a keyboard, switch, or Screenreader can easily see where they are on the page"
      },
      {
        heading:
          "All elements intended to be interactive can be tabbed into with the keyboard"
      },
      {
        heading: "Elements can be navigateds away from using only the keyboard"
      },
      { heading: "Any tabIndex attribute values are either 0 or -1" },
      {
        heading:
          "Semantic elements such as <button> and <a> are inherently focusable and so do not have a tabIndex"
      },
      {
        heading:
          "Elements which are not inherently focusable don't have a tabIndex"
      },
      {
        heading:
          "All modals have initial focus set upon opening of the modal and can be closed using esc key to avoid keyboard trap"
      },
      {
        heading:
          "Focus returns to the element that opened the modal when the modal closes"
      },
      {
        heading:
          "Invisible elements such as inactive modals, drop-down menus, off-screen navs are not focusable until they are visible and are also aria-hidden from the Screenreader"
      }
    ]
  },
  {
    heading: "Images",
    item: "multiple items",
    status: "optional",
    subCategories: [
      { heading: "All <img> elements have an alt attribute " },
      { heading: "Any text on images is included the in the alt description" },
      {
        heading:
          "Any images which are purely decorative have a null alt attribute(alt='')"
      },
      {
        heading:
          "Complex images such as charts, graphs, and maps have a plain text alternative"
      }
    ]
  },
  {
    heading: "SVGs",
    item: "multiple items",
    status: "optional",
    subCategories: [
      {
        heading:
          "SVGs that are child elements of a focusable element includes the attribute focusable=`false`"
      },
      { heading: "Any purely decorate SVG has aria-hidden='true'" },
      { heading: "Img elements with an svg source must include role='img'" }
    ]
  },
  {
    heading: "Headings",
    item: "multiple items",
    status: "required",
    subCategories: [
      {
        heading:
          "Heading element choices are not based purely on visual design but on the structure of the document"
      },
      { heading: "Only one H1 is used per page or view" },
      {
        heading:
          "Heading elements descend based on depth of content, h4 does not appear before h3, for example"
      },
      {
        heading:
          "Heading levels aren’t skipped. There is no jump from a h2 to a h4, for example. "
      }
    ]
  },
  {
    heading: "Controls",
    item: "multiple items",
    status: "required",
    subCategories: [
      { heading: "<a> is used for links" },
      {
        heading:
          "<a> elements always have an href attribute. A link with an onClick instead of a href won’t be properly exposed to assistive technology."
      },
      { heading: "Controls have a visible :focus state" },
      { heading: "<Button> element is used for buttons" },
      {
        heading:
          "A skip link is provided to bypass repeated content e.g. nav or search to give quick access to main content. "
      },
      {
        heading:
          "Links that will open in a new window provide this information "
      }
    ]
  },
  {
    heading: "Tables",
    item: "multiple items",
    status: "optional",
    subCategories: [
      { heading: "<table> element is used for tables" },
      {
        heading:
          "<th> is used for table headers with appropriate scope attributes e.g. scope=”col”, scope=”row” so that the structure is read by a Screenreader"
      },
      {
        heading:
          "Table has a <caption> to describe the information contained in the table"
      }
    ]
  },
  {
    heading: "Forms",
    item: "multiple items",
    status: "optional",
    subCategories: [
      {
        heading:
          "All inputs have an associated label, use for/id pairing wherever possible "
      },
      {
        heading:
          "If the form contains multiple sections of related input ‘fieldset’ is used to group them and ‘legend’ is used to provide a label for each section"
      },
      { heading: "Autocomplete is used where appropriate" },
      {
        heading:
          "Aria-describedby is used to associate the error message to the corresponding input"
      },
      { heading: "Error warnings are indicated by more than just colour" }
    ]
  },
  {
    heading: "Media",
    item: "multiple items",
    status: "optional",
    subCategories: [
      { heading: "Media does not autoplay" },
      { heading: "Pressing space key can cause playback" },
      {
        heading:
          "Pressing the space key will still scroll the page when focus is not a form control"
      }
    ]
  },
  {
    heading: "Appearance",
    item: "multiple items",
    status: "required",
    subCategories: [
      {
        heading:
          "Content is still legible in modes such as Windows High Contrast or Inverted Colors"
      },
      {
        heading:
          "Content is still legible and does not overlap when text size is increased to 200%"
      },
      {
        heading:
          "Proximity between content still makes sense with screen zoom software – does it pass the straw test? "
      }
    ]
  },
  {
    heading: "Animations",
    item: "multiple items",
    status: "optional",
    subCategories: [
      { heading: "Animations are subtle and do not flash" },
      {
        heading:
          "A background video can be paused or hidden if content is placed over it"
      },
      {
        heading:
          "The ‘prefers-reduced-motion: reduce’ CSS media feature has been used to detect if the user has requested that the system minimize the amount of animation or motion"
      }
    ]
  },
  {
    heading: "Colour Contrast",
    item: "multiple items",
    status: "required",
    subCategories: [
      {
        heading:
          "Normal text has a contrast ratio of 4.5: 1 is maintained for Level AA compliance."
      },
      {
        heading:
          "Large text has a contrast ratio of 3: 1 for Level AA compliance. Large text is defined as 14 point (typically 18.66px) and bold or larger, or 18 point (typically 24px) or larger."
      },
      {
        heading: "Icons have a contrast ratio of 3.0: 1 for Level AA compliance"
      },
      {
        heading:
          "Borders and input elements (text input, radio buttons, checkboxes etc. have a contrast ratio of 3.0 : 1 for Level AA compliance"
      },
      {
        heading:
          "Any text that overlaps images or video is legible across the image and/or all of the video"
      },
      { heading: "Contrast ratio is maintained on hover and selection" }
    ]
  },
  {
    heading: "Mobile/touch",
    item: "multiple items",
    status: "optional",
    subCategories: [
      { heading: "Site can be rotated to any orientation" },
      {
        heading:
          "Target size for button and link icons is workable ( at least 44px x 44px ) and these elements can be activated with ease"
      },
      { heading: "There is sufficient space between clickable items" }
    ]
  }
];

export default sectionsArray;
