const WHATSAPP = '5577981393495';
const IFood = 'https://www.ifood.com.br/delivery/vitoria-da-conquista-ba/specialle-candeias/13d755ee-80e4-47c6-b643-099aa7d0e9cc';
const products = [
  {id:'fatia-chocolate-meio-amargo',cat:'Tortas Doces Fatia',name:'Fatia de Chocolate Meio Amargo',price:22,img:'assets/products/fatia-chocolate-meio-amargo.webp',desc:'Fatia de torta com massa de chocolate e recheio de brigadeiro meio amargo.'},
  {id:'torta-ninho-morango-brigadeiro',cat:'Tortas Doces Fatia',name:'Torta Ninho, morango e brigadeiro',price:22,img:'assets/products/torta-ninho-morango-brigadeiro.webp',desc:'Fatia de torta na massa amanteigada com brigadeiro de Ninho e morango.'},
  {id:'red-velvet-ninho',cat:'Tortas Doces Fatia',name:'Torta Red Velvet com Ninho',price:22,img:'assets/products/red-velvet-ninho.webp',desc:'Massa red velvet com recheios de brigadeiro, geleia de morango e Ninho.'},
  {id:'abacaxi-coco-queimado',cat:'Tortas Doces Fatia',name:'Fatia Abacaxi com coco queimado',price:22,img:'assets/products/abacaxi-coco-queimado.webp',desc:'Massa amanteigada de abacaxi com coco queimado.'},
  {id:'ameixa-coco',cat:'Tortas Doces Fatia',name:'Torta ameixa com coco',price:22,img:'assets/products/ameixa-coco.webp',desc:'Massa branca amanteigada com recheio de ameixa com beijinho.'},
  {id:'pistache-meio-amargo',cat:'Tortas Doces Fatia',name:'Pistache com meio amargo',price:22,img:'assets/products/pistache-meio-amargo.webp',desc:'Massa de chocolate molhadinha e fofinha, com recheio de brigadeiro de pistache e brigadeiro meio amargo.'},
  {id:'surpresa-uva',cat:'Tortas Doces Fatia',name:'Fatia Surpresa de uva',price:22,img:'assets/products/surpresa-uva.webp',desc:'Fatia com massa amanteigada, brigadeiro de Ninho e pedaços de uva fresca.'},
  {id:'fatia-pudim',cat:'Tortas Doces Fatia',name:'Fatia Pudim',price:22,img:'assets/products/fatia-pudim.webp',desc:'Massa amanteigada e recheio perfeito de pudim.'},
  {id:'floresta-negra',cat:'Tortas Doces Fatia',name:'Floresta Negra',price:22,img:'assets/products/floresta-negra.webp',desc:'Massa de chocolate fofinha e molhadinha com creme, cerejas e mousse de chocolate.'},
  {id:'brigadeiro-maracuja',cat:'Tortas Doces Fatia',name:'Torta de Brigadeiro com Maracujá',price:22,img:'assets/products/brigadeiro-maracuja.webp',desc:''},
  {id:'nozes-doce-leite',cat:'Tortas Doces Fatia',name:'Torta de Nozes com Doce de Leite',price:22,img:'assets/products/nozes-doce-leite.webp',desc:'Fatia de torta com massa amanteigada, doce de leite e brigadeiro de nozes.'},
  {id:'mini-brigadeiro',cat:'Mini bolo',name:'Mini bolo de brigadeiro',price:22,img:'assets/products/mini-brigadeiro.webp',desc:'Massa de chocolate fofinha e molhadinha, com delicioso recheio de brigadeiro.'},
  {id:'mini-ninho-morango',cat:'Mini bolo',name:'Mini Bolo De Ninho Com Morango',price:22,img:'assets/products/mini-ninho-morango.webp',desc:'Massa branca.'},
  {id:'empada-frango-azeitona',cat:'Quiches e Empadas',name:'Empada de Frango com azeitona',price:12,img:'assets/products/empada-frango-azeitona.webp',desc:'Serve 1 pessoa.'},
  {id:'empada-frango-palmito',cat:'Quiches e Empadas',name:'Empada frango com palmito',price:12,img:'assets/products/empada-frango-palmito.webp',desc:'Serve 1 pessoa.'},
  {id:'empada-carne-seca-banana',cat:'Quiches e Empadas',name:'Empada Carne seca com banana da terra',price:12,img:'assets/products/empada-carne-seca-banana.webp',desc:'Serve 1 pessoa.'},
  {id:'quiche-calabresinha',cat:'Quiches e Empadas',name:'Quiche de calabresinha defumada',price:12,img:'assets/products/quiche-calabresinha.webp',desc:'Serve 1 pessoa.'},
  {id:'lasanha-brownie-ninho-morango',cat:'Brownie',name:'Lasanha de brownie com Ninho brigadeiro e morango',price:20.90,img:'assets/products/lasanha-brownie-ninho-morango.webp',desc:''},
  {id:'mini-palha-ninho-nutella',cat:'Brownie',name:'Mini Palha Italiana de Ninho e Nutella',price:19.90,img:'assets/products/mini-palha-ninho-nutella.webp',desc:'Base de brownie com Ninho, biscoito maisena e cobertura de Nutella. Serve 1 pessoa.'},
  {id:'brownie-supreme',cat:'Brownie',name:'Brownie Supreme',price:20.90,img:'assets/products/brownie-supreme.webp',desc:'2 camadas de brownie com recheio de morangos e brigadeiro tradicional. Serve 1 pessoa.'},
  {id:'supreme-ninho',cat:'Brownie',name:'Supreme de Ninho',price:19.90,img:'assets/products/supreme-ninho.webp',desc:'Brownie recheado com muito brigadeiro de Ninho. Serve 1 pessoa.'},
  {id:'coca-cola-original',cat:'Bebidas',name:'Coca-Cola Original 350ml',price:7,img:'assets/products/coca-cola-original.webp',desc:'Lata 350ml.',drink:true},
  {id:'kuat-guarana',cat:'Bebidas',name:'Kuat Guaraná 350ml',price:7,img:'assets/products/kuat-guarana.webp',desc:'Lata 350ml.',drink:true},
  {id:'fanta-laranja',cat:'Bebidas',name:'Refrigerante Fanta Laranja 350ml',price:7,img:'assets/products/fanta-laranja.webp',desc:'Lata 350ml.',drink:true},
  {id:'agua-crystal-gas',cat:'Bebidas',name:'Água Crystal com Gás 500ml',price:4,img:'assets/products/agua-crystal-gas.webp',desc:'Garrafa 500ml. Bebida gelada.',drink:true},
  {id:'coca-cola-zero',cat:'Bebidas',name:'Refrigerante Coca Cola Zero 350ml',price:7,img:'assets/products/coca-cola-zero.webp',desc:'Lata 350ml.',drink:true},
];

const state={cart:JSON.parse(localStorage.getItem('specialleCart')||'{}')};
const money=n=>n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const save=()=>localStorage.setItem('specialleCart',JSON.stringify(state.cart));
const count=()=>Object.values(state.cart).reduce((a,b)=>a+b,0);
const total=()=>products.reduce((sum,p)=>sum+p.price*(state.cart[p.id]||0),0);

function renderCatalog(filter=''){
  const root=document.querySelector('#catalog');
  const q=filter.trim().toLowerCase();
  const cats=[...new Set(products.map(p=>p.cat))];
  root.innerHTML='';
  cats.forEach(cat=>{
    const list=products.filter(p=>p.cat===cat && (!q || `${p.name} ${p.desc}`.toLowerCase().includes(q)));
    if(!list.length)return;
    const section=document.createElement('section'); section.className='catalog-category'; section.id=slug(cat);
    section.innerHTML=`<div class="category-title"><span class="eyebrow">SPECIALLE</span><h3>${cat}</h3></div><div class="product-grid"></div>`;
    const grid=section.querySelector('.product-grid');
    list.forEach(p=>grid.appendChild(productCard(p)));
    root.appendChild(section);
  });
  if(!root.children.length)root.innerHTML='<div style="padding:40px;text-align:center;color:#756b61">Nenhum produto encontrado. Tente outro termo.</div>';
}
function slug(s){return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-')}
function productCard(p){
  const el=document.createElement('article'); el.className=`product-card ${p.drink?'drink':''}`;
  el.innerHTML=`<div class="product-media"><img src="${p.img}" alt="${p.name}" loading="lazy"></div><div class="product-info"><h4>${p.name}</h4>${p.desc?`<p>${p.desc}</p>`:'<p></p>'}<div class="product-bottom"><span class="price">${money(p.price)}</span><button class="add-btn" data-add="${p.id}">+ Adicionar</button></div></div>`;
  el.querySelector('[data-add]').addEventListener('click',()=>addToCart(p.id));
  return el;
}
function addToCart(id){state.cart[id]=(state.cart[id]||0)+1;save();renderCart();openCart();}
function changeQty(id,delta){state.cart[id]=(state.cart[id]||0)+delta;if(state.cart[id]<=0)delete state.cart[id];save();renderCart();}
function renderCart(){
  document.querySelector('#cartCount').textContent=count();document.querySelector('#cartCount2').textContent=count();
  const box=document.querySelector('#cartItems');box.innerHTML='';
  const entries=products.filter(p=>state.cart[p.id]);
  document.querySelector('#cartEmpty').classList.toggle('hidden',entries.length>0);
  document.querySelector('#cartFooter').classList.toggle('hidden',entries.length===0);
  entries.forEach(p=>{
    const q=state.cart[p.id];const row=document.createElement('div');row.className='cart-row';
    row.innerHTML=`<img src="${p.img}" alt="${p.name}"><div><h4>${p.name}</h4><small>${money(p.price)} cada</small><div class="qty-controls"><button data-minus="${p.id}">−</button><b>${q}</b><button data-plus="${p.id}">+</button><button class="remove-item" data-remove="${p.id}">remover</button></div></div><strong>${money(p.price*q)}</strong>`;
    row.querySelector('[data-minus]').onclick=()=>changeQty(p.id,-1);row.querySelector('[data-plus]').onclick=()=>changeQty(p.id,1);row.querySelector('[data-remove]').onclick=()=>{delete state.cart[p.id];save();renderCart()};box.appendChild(row);
  });
  document.querySelector('#cartTotal').textContent=money(total());
}
function openCart(){document.querySelector('#cartDrawer').classList.add('open');document.querySelector('#cartBackdrop').classList.add('open');document.querySelector('#cartDrawer').setAttribute('aria-hidden','false')}
function closeCart(){document.querySelector('#cartDrawer').classList.remove('open');document.querySelector('#cartBackdrop').classList.remove('open');document.querySelector('#cartDrawer').setAttribute('aria-hidden','true')}
function openCheckout(){if(!count()){openCart();return}document.querySelector('#checkoutModal').classList.add('open');document.querySelector('#checkoutModal').setAttribute('aria-hidden','false')}
function closeCheckout(){document.querySelector('#checkoutModal').classList.remove('open');document.querySelector('#checkoutModal').setAttribute('aria-hidden','true')}
function sendOrder(e){
  e.preventDefault();
  const name=document.querySelector('#customerName').value.trim();const type=document.querySelector('#orderType').value;const notes=document.querySelector('#orderNotes').value.trim();
  const lines=products.filter(p=>state.cart[p.id]).map(p=>`• ${state.cart[p.id]}x ${p.name} — ${money(p.price*state.cart[p.id])}`);
  const message=[`Olá, Specialle! Gostaria de fazer um pedido.`,``,`*Cliente:* ${name}`,`*Forma:* ${type}`,``,`*Itens:*`,...lines,``,`*Total:* ${money(total())}`,notes?`*Observações:* ${notes}`:''].filter(Boolean).join('\n');
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,'_blank','noopener');
}

document.querySelector('#searchInput').addEventListener('input',e=>renderCatalog(e.target.value));
document.querySelector('#openCart').onclick=openCart;document.querySelector('#openCart2').onclick=openCart;document.querySelector('#openCart3').onclick=openCart;document.querySelector('#closeCart').onclick=closeCart;document.querySelector('#cartBackdrop').onclick=closeCart;document.querySelector('#checkoutButton').onclick=openCheckout;document.querySelector('#closeCheckout').onclick=closeCheckout;document.querySelector('#checkoutForm').addEventListener('submit',sendOrder);
document.querySelector('#menuButton').onclick=()=>document.querySelector('#mobileNav').classList.toggle('open');document.querySelectorAll('.mobile-nav a').forEach(a=>a.onclick=()=>document.querySelector('#mobileNav').classList.remove('open'));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeCart();closeCheckout()}});
renderCatalog();renderCart();
