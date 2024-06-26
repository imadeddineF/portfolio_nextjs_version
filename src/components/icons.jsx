import * as React from 'react';

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

// #0A66C2
export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const CircularText = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1440"
    height="1440"
    x="0px"
    y="0px"
    version="1"
    xmlSpace="preserve"
    className={`w-full h-auto ${className}`}
    viewBox="0 0 1080 1080"
    {...rest}
  >
    <path
      d="M5155 8586c-37-11-40-15-46-56-4-25-15-178-24-340s-18-306-21-319c-4-20-39 27-201 270-107 162-199 298-203 302-8 9-98-11-106-24-3-5-16-163-30-351-13-189-25-350-27-358-1-8-92 120-201 285s-199 301-201 303-28-4-59-13c-38-11-54-20-49-28 12-20 475-722 478-725 6-7 116 22 122 32 4 5 17 165 30 354 12 190 24 346 26 348s93-129 202-291c145-216 202-294 214-291 9 3 35 10 58 16 37 9 43 15 47 43 3 17 14 203 26 412 11 209 22 395 25 413 4 36 1 37-60 18zM6245 8037c-99-220-181-404-183-408-3-8 88-53 93-47 1 2 11 21 22 42l20 40 21-45c37-82 110-139 211-165 114-29 219 3 300 92 95 104 123 254 67 367-64 132-232 213-359 174-58-18-60-30 28 164l63 139-29 15c-78 41-54 76-254-368zm340-55c139-68 166-235 59-361-72-86-206-95-298-19-108 89-98 260 22 362 49 42 151 51 217 18zM5665 8311c-95-25-171-89-213-180-22-46-26-71-27-141 0-73 4-93 28-142 35-70 100-130 176-159 81-32 217-32 283 0 68 33 74 43 48 86-12 19-23 35-25 35s-21-10-42-22c-54-32-180-32-239-1-69 37-124 116-124 181 0 16-13 17 267-19 134-18 247-29 251-25s7 42 6 84c-1 126-61 224-168 277-57 28-166 41-221 26zm175-113c60-31 101-85 107-142 3-25 2-46-3-46-18 0-399 52-402 55-7 7 38 82 65 107 38 36 67 47 133 47 39 1 69-6 100-21zM3327 7822l-37-38 120-119c66-66 120-122 120-125s-21-6-47-8c-93-5-196-81-245-179-33-69-33-197 0-266 34-69 103-134 178-169 57-27 73-30 137-26 87 4 149 32 211 94 56 55 87 119 89 183 1 28 5 51 8 51s18-14 34-30l29-30 38 37 38 37-312 313c-172 172-315 313-318 313s-23-17-43-38zm287-386c49-20 112-81 135-130 62-127-32-292-173-304-29-2-71 1-92 8-49 16-122 84-145 135-22 48-24 123-5 169 17 41 71 96 117 119 42 20 118 22 163 3zM7250 7423c-179-146-325-268-325-270 0-12 238-293 286-337 177-164 416-160 586 10 129 129 157 313 73 481-22 43-226 309-289 375-4 4-153-112-331-259zm412-1c48-60 100-135 115-168 57-121 28-260-71-352-63-59-120-84-197-90-127-9-203 35-335 194-52 62-94 116-93 121 0 8 479 403 489 403 3 0 44-49 92-108zM2976 6926c-61-23-108-68-144-137-37-73-51-159-33-210 14-41 10-44-28-25-42 22-44 21-69-29l-22-45 73-36c39-20 167-86 284-146l212-109 25 50 26 50-153 79c-193 101-224 123-247 175-35 77-20 153 45 225 37 41 46 45 95 49 53 5 63 1 238-86 100-50 185-91 190-92 8-2 52 70 52 86 0 6-89 55-197 108-217 107-270 122-347 93zM7777 6660c-118-20-232-113-262-213-32-108-13-223 53-322 38-55 115-119 136-112 6 2 20 18 30 37l19 33-29 21c-100 72-144 189-113 299 9 35 78 117 97 117 5 0 48-106 97-236s94-238 101-241c17-6 96 33 141 71 21 19 52 58 68 87 26 47 30 64 30 134 0 67-5 90-29 142-29 64-88 128-143 156-22 12-144 41-147 36-1-1-23-5-49-9zm164-128c43-22 59-38 81-81 35-66 37-136 7-198-19-39-64-83-86-83-16 0-153 374-140 382 25 16 87 7 138-20zM2742 6192c-105-38-180-128-201-245-22-114 12-212 99-290 64-58 131-82 230-82 130 0 230 66 287 189 25 54 28 72 28 161 0 86-3 106-24 145-13 25-25 47-27 49-4 5-85-42-81-48 31-54 39-91 35-161-3-41-12-89-20-105-35-66-119-124-181-125-26 0-28 3-23 28 27 130 86 485 82 489-3 3-38 8-78 10-54 3-87-1-126-15zm108-99c-1-34-67-383-74-390-13-13-80 33-110 75-38 53-46 132-21 197 27 73 105 126 193 134 6 1 12-7 12-16zM7955 5879c-243-136-300-172-299-189 0-11 1-37 2-58l2-38 318-104c174-56 323-105 330-108 10-3 12 8 10 49l-3 54-258 85c-142 47-259 89-259 94s105 66 234 137c252 138 248 134 231 210l-8 36-300-168zM2757 5383c2-49 6-121 9-160l6-73h88v83c0 46-3 118-6 160l-7 77h-93l3-87zM7860 5306c-93-24-163-87-208-184-47-104-40-269 16-339l17-21 37 24 37 24-19 42c-24 53-26 147-4 211 20 58 87 122 144 137 23 6 48 9 55 6 10-3 3-62-31-257-23-140-40-256-38-259 3-3 47-5 97-5 80 0 99 4 142 27 92 48 145 124 164 234 31 174-75 324-257 363-65 14-94 13-152-3zm232-145c111-70 119-237 15-328-49-43-147-70-147-41 0 16 60 368 65 386 6 18 16 15 67-17zM3074 5098l-30-23 23-34c15-22 23-49 23-76 0-69-21-81-236-131-103-24-188-43-189-42-1 2-10 40-20 86s-22 85-25 87c-14 9-80-17-80-31 0-8 7-44 16-79 9-36 14-70 11-78-2-7-33-18-67-25-59-13-62-14-55-39 3-14 9-38 12-54 6-33 9-34 83-14 62 16 65 14 76-48 6-39 6-39 46-34 22 3 42 8 46 11 3 3 0 27-5 53-6 27-10 49-8 51s86 23 187 46c102 24 202 53 225 65 86 49 110 167 55 272-15 30-35 55-43 57-8 1-28-8-45-20zM3060 4575c-243-124-299-180-300-297 0-107 95-254 181-279 47-15 49-23 9-39-17-7-33-16-36-21-4-6 28-81 41-97 2-3 548 277 558 287 7 7-22 81-38 99-2 2-81-36-175-85-162-83-175-88-234-88-53 0-68 4-100 29-66 50-104 134-92 201 12 61 58 97 248 195l178 91-25 50c-14 27-26 49-28 49-1-1-85-43-187-95zM7515 4614c-9-25-14-48-11-51 11-12 819-322 826-318 9 5 43 95 39 99-9 7-816 316-826 316-5 0-18-21-28-46zM7483 4346c-59-19-104-49-153-102-58-63-82-123-88-215-4-67-1-83 23-138 32-70 96-135 172-172 39-19 64-24 133-24 73 0 92 4 135 27 61 32 124 98 162 170 24 47 28 64 28 143 0 81-3 95-29 143-75 135-249 212-383 168zm148-111c174-59 219-265 85-382-71-63-169-69-253-17-135 84-160 230-59 340 63 69 139 89 227 59zM6893 4032l-42-37 85-100c46-55 93-111 103-125l19-25-57-1c-70-1-135-29-195-84-141-130-135-336 15-474 68-64 126-86 219-86 54 0 78 6 128 31 103 51 181 159 182 253 1 18 6 15 33-17l32-37 38 31c20 17 37 35 37 40 0 7-485 593-539 651-15 17-19 15-58-20zm222-391c105-47 166-160 143-266-14-70-93-148-164-163-115-25-233 51-269 172-51 170 130 330 290 257zM3415 3931c-75-36-136-98-171-175-23-51-26-67-22-135 6-93 35-157 104-224 67-66 123-91 214-95 99-5 172 21 239 87 59 57 88 111 99 183 17 111-18 210-104 295-99 96-240 121-359 64zm252-107c53-31 100-99 109-160 20-137-129-282-267-259-51 9-115 53-149 103-65 96-40 213 61 294 78 63 163 71 246 22zM4119 3354c-102-162-144-209-198-224s-81-12-138 14l-51 24-26-39c-14-21-26-43-26-48s26-19 57-31c58-22 135-24 177-5 16 7 15 1-9-39-15-26-26-48-24-49 2-2 22-15 45-29l41-26 171 271 171 271-44 28c-25 16-47 28-49 28-3 0-46-66-97-146zM6306 3360c-70-25-99-42-149-89-33-31-77-97-77-116 0-6 64-35 77-35 4 0 18 17 31 38 39 64 145 122 222 122 14 0 42-5 64-11 46-13 126-83 111-97-5-6-112-54-237-107-126-54-228-101-228-107 0-22 46-97 84-136 67-71 106-87 211-87 79 0 97 3 145 28 70 36 115 79 148 142 23 43 27 62 27 140s-4 97-28 147c-34 68-92 129-154 159-66 32-170 36-247 9zm329-303c25-132-125-260-262-225-43 10-123 72-123 95 0 10 343 162 367 163 7 0 15-15 18-33zM4750 3080c-30-88-57-160-61-160s-91 29-194 65c-102 36-190 65-194 65-12 0-42-83-33-90 4-4 90-35 192-69 102-35 188-66 192-70 7-6-74-266-85-277-2-2-104 30-227 71s-224 74-225 72c-6-9-35-90-33-92 8-5 546-185 555-185s273 760 273 787c0 9-78 43-99 43-3 0-31-72-61-160zM5853 3213c-18-2-33-7-33-11s14-83 30-177c17-93 30-181 30-195 0-86-58-160-142-181l-50-13 7-50c3-28 8-52 10-54 1-2 20 1 42 7 54 15 114 56 143 99l25 36 9-48 10-48 50 7c28 3 52 7 53 9 2 2-89 535-103 599-6 28-8 29-81 20zM5320 3148c-28-31-26-83 5-113 31-31 66-32 101-1 37 31 39 90 5 117-32 26-85 25-111-3z"
      transform="matrix(.1 0 0 -.1 0 1080)"
    ></path>
  </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);
