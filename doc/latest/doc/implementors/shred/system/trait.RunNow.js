(function() {var implementors = {};
implementors["amethyst_renderer"] = [{text:"impl&lt;'a, P&gt; RunNow&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_renderer/struct.RenderSystem.html\" title=\"struct amethyst_renderer::RenderSystem\">RenderSystem</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"amethyst_renderer/pipe/trait.PolyPipeline.html\" title=\"trait amethyst_renderer::pipe::PolyPipeline\">PolyPipeline</a>,&nbsp;</span>",synthetic:false,types:["amethyst_renderer::system::RenderSystem"]},];
implementors["amethyst_rendy"] = [{text:"impl&lt;'a, B, G&gt; RunNow&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_rendy/system/struct.RenderingSystem.html\" title=\"struct amethyst_rendy::system::RenderingSystem\">RenderingSystem</a>&lt;B, G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"amethyst_rendy/types/trait.Backend.html\" title=\"trait amethyst_rendy::types::Backend\">Backend</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"amethyst_rendy/system/trait.GraphCreator.html\" title=\"trait amethyst_rendy::system::GraphCreator\">GraphCreator</a>&lt;B&gt;,&nbsp;</span>",synthetic:false,types:["amethyst_rendy::system::RenderingSystem"]},];
implementors["amethyst_window"] = [{text:"impl&lt;'a&gt; RunNow&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_window/struct.EventsLoopSystem.html\" title=\"struct amethyst_window::EventsLoopSystem\">EventsLoopSystem</a>",synthetic:false,types:["amethyst_window::system::EventsLoopSystem"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
