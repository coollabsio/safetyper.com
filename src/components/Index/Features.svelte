<script>
  import Feature from "./Feature.svelte";
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-10 gap-y-28 pt-20 lg:px-10">  
  <Feature title="AI-powered (Bring Your Own Key)">
    <div slot="icon">
      <svg class="w-6 h-6" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <g fill="currentColor">
            <path d="M200 56H56a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h144a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m-36 128H92a20 20 0 0 1 0-40h72a20 20 0 0 1 0 40" opacity=".2"/>
            <path d="M200 48h-64V16a8 8 0 0 0-16 0v32H56a32 32 0 0 0-32 32v112a32 32 0 0 0 32 32h144a32 32 0 0 0 32-32V80a32 32 0 0 0-32-32m16 144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16Zm-52-56H92a28 28 0 0 0 0 56h72a28 28 0 0 0 0-56m-28 16v24h-16v-24Zm-56 12a12 12 0 0 1 12-12h12v24H92a12 12 0 0 1-12-12m84 12h-12v-24h12a12 12 0 0 1 0 24m-92-68a12 12 0 1 1 12 12a12 12 0 0 1-12-12m88 0a12 12 0 1 1 12 12a12 12 0 0 1-12-12"/>
        </g>
    </svg>
    </div>
    <div slot="main-text">
      Safetyper harnesses the capabilities of OpenAI's GPT to offer top-notch recommendations. It's akin to having a personal aide that assists in enhancing your writing across various websites you visit.
    </div>
  </Feature>
  <!-- <Feature title="Privacy-focused (s">
    <div slot="icon">
      <svg
        width="512"
        height="512"
        class="icon"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path
            d="M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3l-1-1v-3l1-1V9a2 2 0 0 1 2-2zm3 9h4"
          />
          <circle cx="8.5" cy="11.5" r=".5" fill="#000000" />
          <circle cx="15.5" cy="11.5" r=".5" fill="#000000" />
          <path d="M9 7L8 3m7 4l1-4" />
        </g>
      </svg>
    </div>
    <div slot="main-text">
      OpenAI <a
        class="text-blue-500 font-bold underline"
        href="https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance"
        target="_blank"
      >
        does not reuse</a
      >
      your data to train their models. You can request to
      <a
        href="https://help.openai.com/en/articles/6378407-how-can-i-delete-my-account"
        class="text-blue-500 font-bold underline"
        target="_blank">delete your</a
      >
      data at any time. The ultimate solution will be self-hosted / open-source LLM's. (WIP)
      <br /><span class="text-blue-500 font-bold"></span>
    </div>
  </Feature> -->

  <Feature title="Usage based billing">
    <div slot="icon">
      <svg class="w-6 h-6" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <g fill="currentColor">
            <path d="M240 132c0 19.88-35.82 36-80 36c-19.6 0-37.56-3.17-51.47-8.44C146.76 156.85 176 142 176 124V96.72c36.52 3.34 64 17.86 64 35.28m-64-48c0-19.88-35.82-36-80-36S16 64.12 16 84s35.82 36 80 36s80-16.12 80-36" opacity=".2"/>
            <path d="M184 89.57V84c0-25.08-37.83-44-88-44S8 58.92 8 84v40c0 20.89 26.25 37.49 64 42.46V172c0 25.08 37.83 44 88 44s88-18.92 88-44v-40c0-20.7-25.42-37.32-64-42.43M232 132c0 13.22-30.79 28-72 28c-3.73 0-7.43-.13-11.08-.37C170.49 151.77 184 139 184 124v-18.26c29.87 4.45 48 16.53 48 26.26M72 150.25v-23.79A183.74 183.74 0 0 0 96 128a183.74 183.74 0 0 0 24-1.54v23.79A163 163 0 0 1 96 152a163 163 0 0 1-24-1.75m96-40.32V124c0 8.39-12.41 17.4-32 22.87V123.5c12.91-3.13 23.84-7.79 32-13.57M96 56c41.21 0 72 14.78 72 28s-30.79 28-72 28s-72-14.78-72-28s30.79-28 72-28m-72 68v-14.07c8.16 5.78 19.09 10.44 32 13.57v23.37C36.41 141.4 24 132.39 24 124m64 48v-4.17c2.63.1 5.29.17 8 .17c3.88 0 7.67-.13 11.39-.35a121.92 121.92 0 0 0 12.61 3.76v23.46c-19.59-5.47-32-14.48-32-22.87m48 26.25V174.4a179.48 179.48 0 0 0 24 1.6a183.74 183.74 0 0 0 24-1.54v23.79a165.45 165.45 0 0 1-48 0m64-3.38V171.5c12.91-3.13 23.84-7.79 32-13.57V172c0 8.39-12.41 17.4-32 22.87"/>
        </g>
    </svg>
    </div>
    <div slot="main-text">
      You are only charged for the time you use. If you do not utilize safeTyper for a month, you will not be billed for that month. It's as straightforward as that.
    </div>
  </Feature>
  <Feature title="Open-source">
    <div slot="icon">
      <svg class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M12.001 2c5.523 0 10 4.477 10 10c0 4.4-2.841 8.136-6.789 9.473l-.226.074l-2.904-7.55A2.016 2.016 0 0 0 14.001 12a2 2 0 1 0-2.083 1.998l-2.903 7.549l-.225-.074C4.842 20.136 2 16.4 2 12C2 6.477 6.477 2 12 2m0 2a8 8 0 0 0-4.099 14.872l1.48-3.849a4 4 0 1 1 5.239 0c.565 1.474 1.059 2.757 1.479 3.85A8 8 0 0 0 12 4"/>
    </svg>
    </div>
    <div slot="main-text">
      We intend to make Safetyper open-source in the future. Keep an eye out for updates!
    </div>
  </Feature>
</div>
