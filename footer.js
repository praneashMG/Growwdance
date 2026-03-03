document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="bg-[#F3E8FF] text-[#4B0082] w-full">

  <!-- MAIN FOOTER -->
  <div class="max-w-7xl mx-auto px-6 py-14">

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

      <!-- ABOUT STUDIO -->
      <div>
            <h1 class="text-2xl font-bold text-[#4B0082]">
      <a href="index.html" class="transition">
        Groww Dance
      </a>
    </h1>

        <p class="mt-3 text-[#4B0082] text-sm leading-relaxed">
          Inspiring passion through movement.
          Join us to express, explore, and evolve through dance.
        </p>

        <div class="flex gap-4 mt-4 text-lg">
          <a href="#" class="hover:text-[#9333EA] transition">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="#" class="hover:text-[#9333EA] transition">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="#" class="hover:text-[#9333EA] transition">
            <i class="bi bi-youtube"></i>
          </a>
        </div>
      </div>

      <!-- CLASSES -->
      <div>
        <h3 class="text-xl font-semibold mb-4 text-[#6B21A8]">
          Our Classes
        </h3>
        <ul class="space-y-2 text-[#4B0082] text-sm">
          <li><a href="#" class="hover:text-[#9333EA] transition">Kids Dance Classes</a></li>
          <li><a href="#" class="hover:text-[#9333EA] transition">Adult Dance Classes</a></li>
          <li><a href="#" class="hover:text-[#9333EA] transition">Beginner Batch</a></li>
          <li><a href="#" class="hover:text-[#9333EA] transition">Advanced Batch</a></li>
        </ul>
      </div>

      <!-- QUICK LINKS -->
      <div>
        <h3 class="text-xl font-semibold mb-4 text-[#6B21A8]">
          Quick Links
        </h3>
        <ul class="space-y-2 text-[#4B0082] text-sm">
          <li><a href="about.html" class="hover:text-[#9333EA] transition">About</a></li>
          <li><a href="class.html" class="hover:text-[#9333EA] transition">Classes</a></li>
          <li><a href="gallery.html" class="hover:text-[#9333EA] transition">Gallery</a></li>
          <li><a href="contact.html" class="hover:text-[#9333EA] transition">Contact</a></li>
        </ul>
      </div>

      <!-- CONTACT INFO -->
      <div>
        <h3 class="text-xl font-semibold mb-4 text-[#6B21A8]">
          Contact Us
        </h3>

        <ul class="space-y-3 text-[#4B0082] text-sm">
          <li class="flex items-start gap-2">
            <i class="bi bi-geo-alt-fill text-[#9333EA]"></i>
            <span>Chennai, Tamil Nadu, India</span>
          </li>
          <li class="flex items-center gap-2">
            <i class="bi bi-telephone-fill text-[#9333EA]"></i>
            <span>+91 98765 43210</span>
          </li>
          <li class="flex items-center gap-2">
            <i class="bi bi-envelope-fill text-[#9333EA]"></i>
            <span>info@rhythmdance.com</span>
          </li>
        </ul>
      </div>

    </div>

  </div>

  <!-- BOTTOM BAR -->
  <div class="border-t border-[#D8B4FE] py-6 text-center text-[#6B21A8] text-xs px-4">
    © ${new Date().getFullYear()} Groww Dance. All Rights Reserved.
  </div>

</footer>
`;
});