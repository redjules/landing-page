import TagLine from "./TagLine";

const TestimonialsSection = () => {
  return (
    <section className="flex items-center justify-center flex-col">
      <TagLine>Testimonials</TagLine>
      <h2 className="text-3xl font-bold text-center mt-3 mb-8">
        What builders say about us
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 items-center max-w-screen-xl text-left">
        {/* Column 1 */}
        <div className="grid gap-4">
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img
                src="/testimonials/1.png"
                className="w-12 h-12 rounded-full"
                alt="User Image"
              />
              <p>User</p>
            </div>
            <p className="text-sm space-y-4">
              <span>
                The AI Form Builder is incredibly intuitive and has saved us
                countless hours of manual work. The dynamic form adjustments are
                a game-changer.
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img
                src="/testimonials/2.png"
                className="w-12 h-12 rounded-full"
                alt="User Image"
              />
              <p>User</p>
            </div>
            <p className="text-sm space-y-4">
              <span>
                I love the seamless integrations and the advanced customization
                options. It's perfect for our growing business needs.
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img
                src="/testimonials/3.png"
                className="w-12 h-12 rounded-full"
                alt="User Image"
              />
              <p>User</p>
            </div>
            <p className="text-sm space-y-4">
              <span>
                The security features give me peace of mind knowin our data is
                protected. Plus, the support team is always there when we need
                them.
              </span>
            </p>
          </div>
        </div>
        {/* Column 2 */}
        <div className="grid gap-4">
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img
                src="/testimonials/4.png"
                className="w-12 h-12 rounded-full"
                alt="User Image"
              />
              <p>User</p>
            </div>
            <p className="text-sm space-y-4">
              <span>
                The analytics dashboard delivers invaluable insights at a
                glance. Its clean design and real-time updates empower us to
                make smarter, data-driven decisions.
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img
                src="/testimonials/5.png"
                className="w-12 h-12 rounded-full"
                alt="User Image"
              />
              <p>User</p>
            </div>
            <p className="text-sm space-y-4">
              <span>
                The workflow automation tools have transformed our daily
                operations. Tasks that once took hours are now completed in
                minutes, boosting our overall efficiency.
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img
                src="/testimonials/6.png"
                className="w-12 h-12 rounded-full"
                alt="User Image"
              />
              <p>User</p>
            </div>
            <p className="text-sm space-y-4">
              <span>
                Their dedicated customer service and regular feature
                enhancements ensure we stay ahead of the curve. It truly feels
                like a partner committed to our success.
              </span>
            </p>
          </div>
        </div>
        {/* Column 3 */}
        <div className="grid gap-4">
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img
                src="/testimonials/7.png"
                className="w-12 h-12 rounded-full"
                alt="User Image"
              />
              <p>User</p>
            </div>
            <p className="text-sm space-y-4">
              <span>
                The real-time collaboration tools have transformed how our team
                communicates—keeping everyone aligned, whether remote or onsite.
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img
                src="/testimonials/8.png"
                className="w-12 h-12 rounded-full"
                alt="User Image"
              />
              <p>User</p>
            </div>
            <p className="text-sm space-y-4">
              <span>
                The comprehensive reporting suite turns complex data into clear,
                actionable insights, empowering us to make strategic decisions
                quickly.
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img
                src="/testimonials/9.png"
                className="w-12 h-12 rounded-full"
                alt="User Image"
              />
              <p>User</p>
            </div>
            <p className="text-sm space-y-4">
              <span>
                The user-centric design streamlines onboarding and everyday
                tasks, ensuring every team member feels supported from day one.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
