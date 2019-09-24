<template>
  <table class="table">
    <EklTableHeader v-if="hasHeader" :columns="columns" />
    <EklTableRow :columns="columns" :rows="rows" />
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import _ from "lodash";
import EklTableHeader from "@eklogvinov/ekl-table-header/EklTableHeader";
import EklTableRow from "@eklogvinov/ekl-table-row/EklTableRow";

@Component({
  components: {
    EklTableHeader,
    EklTableRow
  }
})
export default class EklTable extends Vue {
  @Prop({
    type: Array,
    default: () => [],
    required: true
  })
  private columns!: [];

  @Prop({
    type: Array,
    default: () => [],
    required: true
  })
  private rows!: [];

  @Prop({
    type: Boolean,
    default: true
  })
  private hasHeader!: boolean;

  private thElm: any;
  private startOffset: any;
  private grips: any[] = [];
  private defaultColumnWidth: number = 50;

  private greaterThenMinWidth(colName, width) {
    const vm = this;
    const column: any = vm.columns.find((c: any) => c.name === colName);
    const colWidth = parseInt(column.width) || this.defaultColumnWidth;
    if (!column) {
      return false;
    }
    if (width > colWidth) {
      return true;
    }
    return false;
  }

  private onMouseDown(e) {
    const vm: any = this;
    vm.thElm = e.target.parentNode;
    vm.startOffset = vm.thElm.offsetWidth - e.pageX;
  }

  private onMouseMove(e) {
    const vm: any = this;
    if (vm.thElm) {
      const colName = vm.thElm.getAttribute("data-column-name");
      const width = vm.startOffset + e.pageX;
      if (vm.greaterThenMinWidth(colName, width)) {
        vm.thElm.width = width + "px";
        vm.syncColumnWidths();
      }
    }
  }

  private onMouseUp(e) {
    const vm: any = this;
    vm.thElm = undefined;
    vm.syncColumnWidths();
  }

  private setResizeGrips() {
    const vm: any = this;
    const headerCols = Array.from(vm.header.getElementsByTagName("th"));
    headerCols.forEach((th: any) => {
      th.style.position = "relative";
      const grip: any = document.createElement("div");
      grip.className = "grip";
      grip.innerHTML = "&nbsp";
      grip.style.top = 0;
      grip.style.right = 0;
      grip.style.bottom = 0;
      grip.style.width = "5px";
      grip.style.position = "absolute";
      grip.style.cursor = "col-resize";
      grip.addEventListener("mousedown", this.onMouseDown);
      th.appendChild(grip);
      vm.grips.push(grip);
    });
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
  }

  private syncColumnWidths() {
    const vm: any = this;
    const headerCols = Array.from(vm.header.getElementsByTagName("th"));
    const widths = headerCols.map((h: any) =>
      h.width ? h.width : h.clientWidth
    );
    const bodyCols = Array.from(vm.body.querySelectorAll("tr:first-child>td"));
    bodyCols.forEach((c: any, i) => {
      c.width = widths[i] + "px";
    });
  }

  private mounted() {
    if (this.hasHeader) {
      const vm: any = this;
      vm.header = vm.$el.getElementsByClassName("table-header")[0];
      vm.body = vm.$el.getElementsByClassName("table-body")[0];
      vm.setResizeGrips();
      vm.syncColumnWidths();
    }
  }

  private beforeDestroy() {
    if (this.hasHeader) {
      const vm: any = this;
      vm.grips.forEach(grip =>
        grip.removeEventListener("mousedown", vm.onMouseDown)
      );
      document.removeEventListener("mousemove", vm.onMouseMove);
      document.removeEventListener("mouseup", vm.onMouseUp);
    }
  }
}
</script>

<style scoped lang="scss">
.table {
  width: 100%;
}
</style>