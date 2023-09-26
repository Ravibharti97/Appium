

class Drag
{
get  drag (){
    return $('~Drag');
}
get  drag1 (){
    return $('//*[@content-desc="drag-l2"]');
}
get  drag2(){
    return $('//android.view.ViewGroup[@content-desc="drag-r3"]');
}
get  drag3 (){
    return $('//android.view.ViewGroup[@content-desc="drag-r1"]');
}
get  drag4 (){
    return $('//android.view.ViewGroup[@content-desc="drag-c1"]');
}
get  drag5 (){
    return $('//android.view.ViewGroup[@content-desc="drag-c3"]');
}
get  drag6 (){
    return $('//android.view.ViewGroup[@content-desc="drag-r2"]');
}
get  drag7(){
    return $('//android.view.ViewGroup[@content-desc="drag-c2"]');
}
get  drag8 (){
    return $('//android.view.ViewGroup[@content-desc="drag-l1"]');
}
get  drag9 (){
    return $('//android.view.ViewGroup[@content-desc="drag-l3"]');
}
get  drop1 (){
    return $('//*[@content-desc="drop-l1]');
}
get  drop2(){
    return $('//android.view.ViewGroup[@content-desc="drop-c1"]');
}
get  drop3 (){
    return $('//android.view.ViewGroup[@content-desc="drop-r1"]');
}
get  drop4 (){
    return $('//android.view.ViewGroup[@content-desc="drop-l2"]');
}
get  drop5 (){
    return $('//android.view.ViewGroup[@content-desc="drop-c2"]');
}
get  drop6 (){
    return $('//android.view.ViewGroup[@content-desc="drop-r2"]');
}
get  drop7(){
    return $('//android.view.ViewGroup[@content-desc="drop-l3"]');
}
get  drop8 (){
    return $('//android.view.ViewGroup[@content-desc="drop-c3"]');
}
get  drop9 (){
    return $('//android.view.ViewGroup[@content-desc="drop-r3"]');
}

}
export default new Drag();