import {HeaderComponent} from "./components/header.component";
import {NavigationComponent} from "./components/navigation.component";
import {CreateComponent} from "./components/create.component";
import {PostsComponent} from "./components/posts.component";
import {FavoriteComponent} from "./components/favorite.component";

const header = new HeaderComponent('header');

const navigation = new NavigationComponent('navigation');


const create = new CreateComponent('create');
const posts = new PostsComponent('posts');
const favorite = new FavoriteComponent('favorite');

navigation.registerTabs([
    {name: posts, component: PostsComponent},
    {name: create, component: CreateComponent},
    {name: favorite, component: FavoriteComponent},
])
