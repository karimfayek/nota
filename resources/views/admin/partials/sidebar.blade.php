<div class="app-sidebar__overlay" data-toggle="sidebar"></div>
<aside class="app-sidebar">
    <ul class="app-menu">
        <li>
            <a class="app-menu__item {{ Route::currentRouteName() == 'admin.dashboard' ? 'active' : '' }}" href="{{ route('admin.dashboard') }}">
                <i class="app-menu__icon fa fa-dashboard"></i>
                <span class="app-menu__label">Dashboard</span>
            </a>
        </li>
        
        <li class="nav-item has-treeview {{ Route::currentRouteName() == 'admin.categories.index' ||  Route::currentRouteName() == 'admin.attributes.index'  ||  Route::currentRouteName() == 'admin.products.index' |  Route::currentRouteName() == 'admin.reviews.index'  ||  Route::currentRouteName() == 'admin.products.index'  ||  Route::currentRouteName() == 'admin.brands.index' ? 'menu-open' : '' }}">            
            <a class="app-menu__item " href="#">
                <i class="app-menu__icon fa fa-list"></i>
                <span class="app-menu__label">Catalog</span><i class="right fa fa-angle-left "></i>
            </a>
            <ul> 
                    <li>
                        <a class="app-menu__item {{ Route::currentRouteName() == 'admin.categories.index' ? 'active' : '' }}" href="{{ route('admin.categories.index') }}">
                            <i class="app-menu__icon fa fa-tags"></i>
                            <span class="app-menu__label">Categories</span>
                        </a>
                    </li>              
                <li>
                    <a class="app-menu__item {{ Route::currentRouteName() == 'admin.products.index' ? 'active' : '' }}" href="{{ route('admin.products.index') }}">
                            <i class="app-menu__icon fa fa-shopping-bag"></i>
                            <span class="app-menu__label">Products</span>
                    </a>
                </li>              
                <li>
                    <a class="app-menu__item {{ Route::currentRouteName() == 'admin.colors.index' ? 'active' : '' }}" href="{{ route('admin.colors.index') }}">
                            <i class="app-menu__icon fa fa-shopping-bag"></i>
                            <span class="app-menu__label">Colors</span>
                    </a>
                </li>           
                   
                                     
            </ul>
        </li>
       
       
        <li>
            <a class="app-menu__item {{ Route::currentRouteName() == 'admin.banners.index' ? 'active' : '' }}" href="{{ route('admin.banners.index') }}">
                <i class="app-menu__icon fa fa-image"></i>
                <span class="app-menu__label">Homepage Sliders</span>
            </a>
        </li>
        <li class="nav-item has-treeview {{ Route::currentRouteName() == 'admin.cmss.index' ||  Route::currentRouteName() == 'admin.galleries.index'  ||  Route::currentRouteName() == 'admin.products.index' |  Route::currentRouteName() == 'admin.reviews.index'  ||  Route::currentRouteName() == 'admin.products.index'  ||  Route::currentRouteName() == 'admin.brands.index' ? 'menu-open' : '' }}">            
            <a class="app-menu__item " href="#">
                <i class="app-menu__icon fa fa-list"></i>
                <span class="app-menu__label">CMS</span><i class="right fa fa-angle-left "></i>
            </a>
            <ul> 
                    <li>
                        <a class="app-menu__item {{ Route::currentRouteName() == 'admin.galleries.index' ? 'active' : '' }}" href="{{ route('admin.galleries.index') }}">
                            <i class="app-menu__icon fa fa-tags"></i>
                            <span class="app-menu__label">galleries</span>
                        </a>
                    </li>              
                    <li>
                        <a class="app-menu__item {{ Route::currentRouteName() == 'admin.cmss.index' ? 'active' : '' }}" href="{{ route('admin.cmss.index') }}">
                            <i class="app-menu__icon fa fa-file"></i>
                            <span class="app-menu__label">CMS</span>
                        </a>
                    </li>   
                    <li>
                        <a class="app-menu__item {{ Route::currentRouteName() == 'admin.blogs.index' ? 'active' : '' }}" href="{{ route('admin.blogs.index') }}">
                            <i class="app-menu__icon fa fa-file"></i>
                            <span class="app-menu__label">Blog</span>
                        </a>
                    </li>        
                   
                                     
            </ul>
        </li>
        
        <li>
            <a class="app-menu__item {{ Route::currentRouteName() == 'admin.settings' ? 'active' : '' }}" href="{{ route('admin.settings') }}">
                <i class="app-menu__icon fa fa-cogs"></i>
                <span class="app-menu__label">Settings</span>
            </a>
        </li>
       
        {{-- Messages --}}
        <li class="nav-item has-treeview
        {{ Route::currentRouteName() == 'admin.newsletters.index' || Route::currentRouteName() == 'admin.contacts.index'
        ? 'menu-open' : '' }}">            
            <a class="app-menu__item " href="#">
               <i class="app-menu__icon fa fa-envelope"></i>
               <span class="app-menu__label">messages</span><i class="right fa fa-angle-left "></i>
           </a>
           <ul>
                	
                <li>
                   <a class="app-menu__item {{ Route::currentRouteName() == 'admin.contacts.index' ? 'active' : '' }}" href="{{ route('admin.contacts.index') }}">
                       <i class="app-menu__icon fa fa-phone"></i>
                       <span class="app-menu__label">Contact Page</span>
                   </a>
               </li> 
               <li>
                <a class="app-menu__item {{ Route::currentRouteName() == 'admin.messages.services.index' ? 'active' : '' }}" href="{{ route('admin.messages.services.index') }}">
                    <i class="app-menu__icon fa fa-phone"></i>
                    <span class="app-menu__label">Service Requests</span>
                </a>
            </li> 
            <li>
                <a class="app-menu__item {{ Route::currentRouteName() == 'admin.messages.getquote.index' ? 'active' : '' }}" href="{{ route('admin.messages.getquote.index') }}">
                    <i class="app-menu__icon fa fa-phone"></i>
                    <span class="app-menu__label">General Get Quote</span>
                </a>
            </li> 
            <li>
                <a class="app-menu__item {{ Route::currentRouteName() == 'admin.messages.getProductQuote.index' ? 'active' : '' }}" href="{{ route('admin.messages.getProductQuote.index') }}">
                    <i class="app-menu__icon fa fa-phone"></i>
                    <span class="app-menu__label">Product Quote requests</span>
                </a>
            </li> 
           
           </ul>
       </li>
       {{-- End Messages --}}
       <li>
        <a class="app-menu__item {{ Route::currentRouteName() == 'admin.translation.index' ? 'active' : '' }}" href="{{ route('admin.translation.index') }}">
            <i class="app-menu__icon fa fa-language"></i>
            <span class="app-menu__label">Heading Translations</span>
        </a>
    </li>
		<li>
            <a class="app-menu__item {{ Route::currentRouteName() == 'password.form' ? 'active' : '' }}" href="{{ route('password.form') }}">
                <i class="app-menu__icon fa fa-key"></i>
                <span class="app-menu__label">Change Password</span>
            </a>
        </li>
    </ul>
</aside>
