---
layout: post
title:  "Rendering React via a Symfony Twig Extension"
date: 2024-03-31T19:16:40.268793-07:00
last_modified_at: 2024-03-31T19:16:40.268793-07:00
tags:
- PHP
- Symfony
- Twig
- React
---

Looking for an easier way to render individual React components from Twig? Here's what I came up with on a recent project using a Twig Extension.

The project & samples were written using Symfony 6 with Encore and Webpack.

# Configure an Entrypoint in Webpack & Encore
The entry script must be loaded on any page you want to render a component. You can create a single bundle and reuse it across many components and pages, or create multiple bundles.

In my application and this example I use a shared `components` bundle which can be accessed on any page.

Add an entrypoint to your `webpack.config.js`.
```javascript
.addEntry('components', './assets/components.tsx')
```

Load the bundle on a page (or entire layout). This uses Encore inside a Twig file.
{% highlight php %}
{% raw %}
{{ encore_entry_script_tags('components') }}
{% endraw %}
{% endhighlight %}


# Create components.tsx
Create the components.tsx and add each component you want to load to the `componentMap` variable.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import EmbedModal from "./components/EmbedModal";

const componentMap = {
    'EmbedModal': EmbedModal,
};

function getComponentByName(componentName: string) {
    const Component = componentMap[componentName];
    if (Component) {
        return Component;
    } else {
        console.error(`Unknown component: ${componentName}`);
    }
}

document.querySelectorAll('.react-container').forEach(container => {
    // @ts-ignore
    const componentName = container.dataset.component;
    // @ts-ignore
    const props = JSON.parse(container.dataset.props);

    const Component = getComponentByName(componentName);
    ReactDOM.render(<React.StrictMode><Component {...props} /></React.StrictMode>, container);
});
```

This example is fairly naive, you could make the componentMap more magical if you'd like, but for a small number of components it's easy to manage them manually.

# Create the TwigExtension

```php
<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class TwigExtension extends AbstractExtension
{
    public function getFunctions()
    {
        return [
            new TwigFunction('renderReactComponent', [$this, 'renderReactComponent'], ['is_safe' => ['html']]),
        ];
    }

    public function renderReactComponent($componentName, $props = null): string
    {
        if (is_null($props)) {
            $props = [];
        }
        $prop_str = json_encode($props);
        $prop_str = htmlspecialchars($prop_str, ENT_QUOTES, 'UTF-8');

        return <<<HTML
                <div class="react-container inline" data-component="{$componentName}" data-props="{$prop_str}"></div>
            HTML;
    }
}

```

Make sure your extension is loaded by Symfony, this might happen automatically or you may have to add the service manually.


# Render a Component
Now you're ready to render! Call the Twig extension anywhere in your twig files where you want a react component to appear.

{% highlight php %}
{% raw %}
{{ renderReactComponent('EmbedModal', {
        'name': event.name,
        'embed_url': event.getEmbedUrl(),
}) }}
{% endraw %}
{% endhighlight %}